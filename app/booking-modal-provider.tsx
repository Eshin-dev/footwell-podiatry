"use client";

import { useEffect, useId, useState } from "react";
import { CLINIKO_EMBED_URL } from "./booking";

function isBookingTrigger(target: HTMLElement | null): HTMLAnchorElement | HTMLButtonElement | null {
    if (!target) {
        return null;
    }

    const directTrigger = target.closest<HTMLAnchorElement | HTMLButtonElement>(
        'a[data-book-appointment="true"], button[data-book-appointment="true"]',
    );
    if (directTrigger) {
        return directTrigger;
    }

    const buttonLike = target.closest<HTMLAnchorElement | HTMLButtonElement>("a,button");
    if (!buttonLike) {
        return null;
    }

    const text = buttonLike.textContent?.trim().toLowerCase() ?? "";
    return text === "book an appointment" ? buttonLike : null;
}

export default function BookingModalProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isOpen, setIsOpen] = useState(false);
    const titleId = useId();

    useEffect(() => {
        function onDocumentClick(event: MouseEvent) {
            const target = event.target;
            if (!(target instanceof HTMLElement)) {
                return;
            }

            const trigger = isBookingTrigger(target);
            if (!trigger) {
                return;
            }

            event.preventDefault();
            setIsOpen(true);
        }

        function onEscape(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        }

        document.addEventListener("click", onDocumentClick);
        document.addEventListener("keydown", onEscape);

        return () => {
            document.removeEventListener("click", onDocumentClick);
            document.removeEventListener("keydown", onEscape);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            {children}
            {isOpen ? (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-[#12363a]/60 px-4 py-8"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={titleId}
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="w-full max-w-5xl overflow-hidden border border-[#c6dedb] bg-[#f8fbfb] shadow-[0_12px_40px_rgba(20,63,66,0.25)]"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-center justify-between border-b border-[#c6dedb] bg-[#eef7f5] px-4 py-3 md:px-6">
                            <h2 id={titleId} className="text-lg font-semibold text-[#12363a] md:text-xl">
                                Book an appointment
                            </h2>
                            <button
                                type="button"
                                className="rounded-none border border-[#b8d7d3] bg-white px-3 py-1 text-sm font-medium text-[#2b5154] transition-colors hover:bg-[#eaf3f3]"
                                onClick={() => setIsOpen(false)}
                            >
                                Close
                            </button>
                        </div>
                        <iframe
                            title="Cliniko booking"
                            src={CLINIKO_EMBED_URL}
                            className="h-[75vh] min-h-130 w-full"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                </div>
            ) : null}
        </>
    );
}
