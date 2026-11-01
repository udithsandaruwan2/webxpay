"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

import {cn} from "@/lib/utils"
import Image from "next/image";



function Accordion({
                       ...props
                   }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
    return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
                           className,
                           ...props
                       }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
    return (
        <AccordionPrimitive.Item
            data-slot="accordion-item"
            className={cn("mb-2", className)}
            {...props}
        />
    )
}

function AccordionTrigger({
                              className,
                              children,
                              ...props
                          }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                data-slot="accordion-trigger"
                className={cn(
                    "bg-webxpay-yellow px-5 focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-xl py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>div]:rotate-180",
                    className
                )}
                {...props}
            >
                <h1 className={`font-bold text-[20px]`}>{children}</h1>
                <div className={`h-full grid place-items-center translate-y-0.5 transition-transform duration-200`}>
                    <Image alt={'accordion-icon'} src={'/pricing/arrow.svg'} height={13} width={13}/>
                </div>
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    )
}

function AccordionContent({
                              className,
                              children,
                              ...props
                          }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
    return (
        <AccordionPrimitive.Content
            data-slot="accordion-content"
            className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
            {...props}
        >
            <div className={cn("mt-2 pt-4 pb-4 px-5 bg-webxpay-table", className)}>{children}</div>
        </AccordionPrimitive.Content>
    )
}

export {Accordion, AccordionItem, AccordionTrigger, AccordionContent}