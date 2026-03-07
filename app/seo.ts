export const SITE_NAME = "Footwell Podiatry";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://footwell-podiatry.co.uk";
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const normalizedSiteUrl = SITE_URL.replace(/\/$/, "");
export const SITE_URL_WITH_BASE_PATH = `${normalizedSiteUrl}${BASE_PATH}`;

export const BUSINESS_PHONE_DISPLAY = "07552 514 505";
export const BUSINESS_PHONE_E164 = "+447552514505";
export const BUSINESS_EMAIL = "info@footwell-podiatry.co.uk";
export const BUSINESS_ADDRESS = {
  streetAddress: "13 Northway",
  addressLocality: "Broughton, Preston",
  postalCode: "PR3 5JX",
  addressCountry: "GB",
};

export const BUSINESS_OPENING_HOURS = [
  { dayOfWeek: "Monday", opens: "10:00", closes: "16:00" },
  { dayOfWeek: "Thursday", opens: "10:00", closes: "19:00" },
  { dayOfWeek: "Friday", opens: "10:00", closes: "16:00" },
  { dayOfWeek: "Saturday", opens: "09:00", closes: "12:00" },
] as const;

export function absoluteUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL_WITH_BASE_PATH}${normalizedPath}`;
}
