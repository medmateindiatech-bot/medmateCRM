export const API_BASE = "https://api.nammamedmate.com",
  SUPPORT_EMAIL = "support@nammamedmate.com",
  SITE_CONTACT = {
    supportEmail: SUPPORT_EMAIL,
  },
  EMPTY_LEAD = {
    name: "",
    phone: "",
    email: "",
    pharmacyName: "",
    cityPincode: "",
    preferredTime: "",
    monthlySales: "",
    subject: "",
    message: "",
    source: "",
    notes: "",
    companyWebsite: "",
  };
export function buildLead(n, s) {
  return {
    ...EMPTY_LEAD,
    ...s,
    type: n,
    site: "nammamedmate",
  };
}
export async function submitLead(n) {
  if (n.companyWebsite.trim()) return;
  if (
    !(
      await fetch(`${API_BASE}/api/v1/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(n),
      })
    ).ok
  )
    throw new Error("lead");
}
