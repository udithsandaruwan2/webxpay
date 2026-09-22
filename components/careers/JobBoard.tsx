"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
    Search,
    ArrowRight,
    ArrowUpRight,
    Briefcase,
    Receipt,
    Code2,
    ShieldCheck,
    Palette,
    Headphones,
    Download,
    X,
} from "lucide-react";

const JOBS = [
    {
        id: "WXP-SLS-001",
        title: "Senior/ Executive, Merchant Acquiring",
        dept: "Merchant Acquiring",
        location: "Sri Lanka",
        type: "Full-time",
        image: "/careers/merchant-acquiring.jpeg",
        whyJoin: [
            "Fast growing fintech company",
            "Attractive performance based incentives",
            "Career growth and development opportunities",
            "Exposure to leading merchants and businesses across Sri Lanka",
            "Work with innovative payment technologies",
        ],
    },
    {
        id: "WXP-RSK-001",
        title: "Senior Credit & Risk officer",
        dept: "Compliance & Risk",
        location: "Colombo",
        type: "Full-time",
        image: "/careers/senior-credit-risk-officer.jpeg",
        whyJoin: [
            "Fast growing fintech company",
            "Attractive performance based incentives",
            "Career growth and development opportunities",
            "Exposure to leading merchants and businesses across Sri Lanka",
            "Work with innovative payment technologies",
        ],
    },
];

const HIRING_DEPARTMENTS = Array.from(new Set(JOBS.map((j) => j.dept)));

const DEPARTMENT_ICONS = {
    "Merchant Acquiring": Briefcase,
    "Compliance & Risk": ShieldCheck,
};

const DEPARTMENT_CHIPS = [
    { id: "all", label: "All roles", icon: Receipt, hiring: true },
    ...HIRING_DEPARTMENTS.map((dept) => ({
        id: dept,
        label: dept,
        icon: DEPARTMENT_ICONS[dept as keyof typeof DEPARTMENT_ICONS] ?? Briefcase,
        hiring: true,
    })),
    { id: "Frontend Developer", label: "Frontend Developer", icon: Code2, hiring: false },
    { id: "Product & Design", label: "Product & Design", icon: Palette, hiring: false },
    { id: "Customer Success", label: "Customer Success", icon: Headphones, hiring: false },
];

const JobBoard = () => {
    const [activeDept, setActiveDept] = useState("all");
    const [query, setQuery] = useState("");
    const [openId, setOpenId] = useState<string | null>(null);
    const [cvEmail, setCvEmail] = useState("");
    const [posterJob, setPosterJob] = useState<(typeof JOBS)[number] | null>(null);

    const filtered = useMemo(() => {
        return JOBS.filter((j) => {
            const matchesDept = activeDept === "all" || j.dept === activeDept;
            const matchesQuery = j.title.toLowerCase().includes(query.toLowerCase());
            return matchesDept && matchesQuery;
        });
    }, [activeDept, query]);

    const applyMailto = (job: (typeof JOBS)[number]) =>
        `mailto:careers@webxpay.com?subject=${encodeURIComponent(`Application: ${job.title} (${job.id})`)}`;

    const sendCvMailto = () =>
        `mailto:careers@webxpay.com?subject=${encodeURIComponent("CV Submission")}${
            cvEmail ? `&body=${encodeURIComponent(`My email: ${cvEmail}`)}` : ""
        }`;

    return (
        <div className={`max-w-7xl mx-auto px-5`}>
            {/* Stat strip */}
            <div className={`flex flex-wrap items-center gap-x-6 gap-y-2 rounded-xl bg-webxpay-table px-5 py-4 mb-8 text-sm`}>
                <span className={`font-bold text-[15px]`}>{String(JOBS.length).padStart(2, "0")} roles open</span>
                <span className={`text-webxpay-values`}>across {HIRING_DEPARTMENTS.length} team{HIRING_DEPARTMENTS.length > 1 ? "s" : ""}</span>
                <div className={`flex flex-wrap gap-x-4 gap-y-1 text-webxpay-values text-xs sm:ml-auto`}>
                    {HIRING_DEPARTMENTS.map((dept) => {
                        const count = JOBS.filter((j) => j.dept === dept).length;
                        return (
                            <span key={dept}>
                                {dept} <span className={`text-black font-semibold`}>{count}</span>
                            </span>
                        );
                    })}
                </div>
            </div>

            {/* Department filters */}
            <div className={`flex gap-2 overflow-x-auto pb-2 mb-4 -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap`}>
                {DEPARTMENT_CHIPS.map((d) => {
                    const Icon = d.icon;
                    const active = activeDept === d.id;

                    if (!d.hiring) {
                        return (
                            <div
                                key={d.id}
                                aria-disabled
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-webxpay-border-grey/20 bg-webxpay-table/60 text-webxpay-values/60 whitespace-nowrap shrink-0 cursor-not-allowed`}
                            >
                                <Icon size={14} />
                                {d.label}
                                <span className={`font-mono text-[9px] uppercase tracking-wide bg-white/70 border border-webxpay-border-grey/30 px-1.5 py-0.5 rounded-full`}>
                                    Not hiring
                                </span>
                            </div>
                        );
                    }

                    return (
                        <button
                            key={d.id}
                            onClick={() => setActiveDept(d.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm border whitespace-nowrap shrink-0 transition ${
                                active
                                    ? "bg-webxpay-yellow text-black border-webxpay-yellow font-semibold"
                                    : "border-webxpay-border-grey/40 text-webxpay-values hover:border-black/40 hover:text-black"
                            }`}
                        >
                            <Icon size={14} />
                            {d.label}
                        </button>
                    );
                })}
            </div>

            {/* Search */}
            <div className={`mb-8`}>
                <div className={`flex items-center gap-2 bg-webxpay-table border border-webxpay-border-grey/30 rounded-full px-4 py-2.5 sm:max-w-sm`}>
                    <Search size={16} className={`text-webxpay-values shrink-0`} />
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search roles"
                        className={`bg-transparent outline-none text-sm w-full`}
                    />
                </div>
            </div>

            {/* Job list */}
            {filtered.length === 0 ? (
                <div className={`text-center py-16 text-webxpay-values`}>
                    <p className={`font-poppins font-semibold text-xl mb-2 text-black`}>No roles match that search.</p>
                    <p className={`text-sm`}>Try a different team or location, or send us your CV below.</p>
                </div>
            ) : (
                <div className={`space-y-3 mb-14`}>
                    {filtered.map((job) => {
                        const isOpen = openId === job.id;
                        return (
                            <div
                                key={job.id}
                                className={`group border border-webxpay-border-grey/30 rounded-xl overflow-hidden transition-all duration-200 ease-in-out hover:border-black/30 hover:shadow-md`}
                            >
                                <button
                                    onClick={() => setOpenId(isOpen ? null : job.id)}
                                    className={`w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-4 text-left`}
                                >
                                    <div className={`flex items-center gap-4 min-w-0`}>
                                        <span className={`font-mono text-xs text-webxpay-values hidden sm:block shrink-0`}>
                                            {job.id}
                                        </span>
                                        <div className={`min-w-0`}>
                                            <div className={`font-semibold truncate`}>{job.title}</div>
                                            <div className={`text-xs text-webxpay-values mt-0.5 truncate`}>
                                                {job.dept} &middot; {job.location} &middot; {job.type}
                                            </div>
                                        </div>
                                    </div>
                                    <span
                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#111111] text-white transition duration-200 ease-in-out ${
                                            isOpen ? "rotate-45" : "group-hover:rotate-45"
                                        }`}
                                    >
                                        <ArrowRight size={14} />
                                    </span>
                                </button>
                                {isOpen && (
                                    <div className={`px-4 sm:px-5 pb-5 pt-1 border-t border-webxpay-border-grey/20`}>
                                        <div className={`grid grid-cols-1 sm:grid-cols-[1fr_220px] gap-5 items-start`}>
                                            <div>
                                                <div className={`text-sm text-webxpay-values leading-relaxed`}>
                                                    <p className={`font-bold text-black mb-1`}>Why Join WEBXPAY?:</p>
                                                    <ul className={`list-disc pl-5 space-y-1`}>
                                                        {job.whyJoin.map((item) => (
                                                            <li key={item}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Poster thumbnail */}
                                            <div className={`rounded-xl border border-webxpay-border-grey/20 overflow-hidden bg-webxpay-table`}>
                                                <button
                                                    onClick={() => setPosterJob(job)}
                                                    className={`group relative block w-full h-[140px] cursor-zoom-in`}
                                                >
                                                    <Image
                                                        src={job.image}
                                                        alt={`${job.title} recruitment poster`}
                                                        fill
                                                        className={`object-cover object-top transition-transform duration-300 group-hover:scale-105`}
                                                    />
                                                    <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center`}>
                                                        <span className={`opacity-0 group-hover:opacity-100 transition bg-black/80 text-white text-xs px-3 py-1.5 rounded-full`}>
                                                            View poster
                                                        </span>
                                                    </div>
                                                </button>
                                                <div className={`flex items-center justify-between gap-2 px-3 py-2 text-xs text-webxpay-values`}>
                                                    <span>Recruitment poster</span>
                                                    <a href={job.image} download className={`font-semibold text-black hover:underline shrink-0`}>
                                                        Download
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Bottom CTA */}
            <div className={`border-t border-webxpay-border-grey/20 py-14 text-center`}>
                <p className={`font-poppins font-semibold text-2xl mb-2`}>Don&apos;t see your role?</p>
                <p className={`text-webxpay-values mb-6`}>
                    We&apos;re always meeting people who move fast and care about the details. Send us your CV.
                </p>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        window.location.href = sendCvMailto();
                    }}
                    className={`flex justify-center px-5`}
                >
                    <div className={`flex bg-webxpay-table border border-webxpay-border-grey/30 rounded-full overflow-hidden max-w-sm w-full`}>
                        <input
                            type="email"
                            required
                            value={cvEmail}
                            onChange={(e) => setCvEmail(e.target.value)}
                            placeholder="sample@email.com"
                            className={`flex-1 min-w-0 px-5 py-3 text-sm outline-none bg-transparent`}
                        />
                        <button type="submit" className={`bg-webxpay-yellow px-6 font-semibold text-sm shrink-0 text-black`}>
                            Send CV
                        </button>
                    </div>
                </form>
            </div>

            {/* Poster lightbox */}
            {posterJob && (
                <div
                    onClick={() => setPosterJob(null)}
                    className={`fixed inset-0 z-100 bg-black/75 flex items-center justify-center p-4 animate-in fade-in-0 duration-200`}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`relative bg-white rounded-2xl p-4 sm:p-6 max-w-3xl w-full max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200`}
                    >
                        <button
                            onClick={() => setPosterJob(null)}
                            aria-label="Close"
                            className={`absolute top-3 right-3 z-10 bg-black/80 text-white rounded-full p-1.5 hover:bg-black transition`}
                        >
                            <X size={14} />
                        </button>
                        <div className={`relative flex-1 min-h-0 rounded-xl border border-webxpay-border-grey/20 overflow-y-auto bg-webxpay-table`}>
                            <Image
                                src={posterJob.image}
                                alt={`${posterJob.title} recruitment poster`}
                                width={1080}
                                height={1350}
                                className={`w-full h-auto object-contain`}
                            />
                        </div>
                        <div className={`flex gap-3 justify-center mt-4 shrink-0`}>
                            <a
                                href={posterJob.image}
                                download
                                className={`inline-flex items-center gap-1.5 bg-webxpay-yellow text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:brightness-95 transition`}
                            >
                                Download poster <Download size={15} />
                            </a>
                            <a
                                href={applyMailto(posterJob)}
                                className={`inline-flex items-center gap-1.5 bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-black/85 transition`}
                            >
                                Apply now <ArrowUpRight size={15} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobBoard;
