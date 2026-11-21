import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as React from "react";
import { SITE_CONTACT, buildLead, submitLead } from "../lib/api";
import { Honeypot } from "./Honeypot";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";

export const EMPTY_DEMO_FORM = {
  name: "",
  phone: "",
  pharmacyName: "",
  cityPincode: "",
  preferredTime: "",
  source: "ORGANIC",
  notes: "",
};
export function DemoForm({ onSubmitted, idPrefix = "demo" }) {
  const [i, l] = React.useState(EMPTY_DEMO_FORM),
    [c, d] = React.useState(""),
    [h, p] = React.useState("idle");
  async function m(w) {
    w.preventDefault();
    p("sending");
    const x = {
      ...i,
      source: i.source || "ORGANIC",
    };
    try {
      await submitLead(
        buildLead("demo", {
          name: x.name,
          phone: x.phone,
          pharmacyName: x.pharmacyName,
          cityPincode: x.cityPincode,
          preferredTime: x.preferredTime,
          source: x.source,
          notes: x.notes,
          companyWebsite: c,
        }),
      );
      p("sent");
      l(EMPTY_DEMO_FORM);
      d("");
      onSubmitted == null || onSubmitted();
    } catch {
      p("error");
    }
  }
  function v(w, x) {
    l((j) => ({
      ...j,
      [w]: x,
    }));
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={m} noValidate data-testid="demo-form">
      <Honeypot value={c} onChange={d} />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor={`${idPrefix}-name`}>Name</Label>
          <Input
            id={`${idPrefix}-name`}
            required
            value={i.name}
            onChange={(w) => v("name", w.target.value)}
            autoComplete="name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor={`${idPrefix}-phone`}>Phone</Label>
          <Input
            id={`${idPrefix}-phone`}
            required
            type="tel"
            value={i.phone}
            onChange={(w) => v("phone", w.target.value)}
            autoComplete="tel"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor={`${idPrefix}-pharmacy`}>Pharmacy name</Label>
          <Input
            id={`${idPrefix}-pharmacy`}
            required
            value={i.pharmacyName}
            onChange={(w) => v("pharmacyName", w.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor={`${idPrefix}-city`}>City / pincode</Label>
          <Input
            id={`${idPrefix}-city`}
            required
            value={i.cityPincode}
            onChange={(w) => v("cityPincode", w.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor={`${idPrefix}-time`}>Preferred time</Label>
          <Input
            id={`${idPrefix}-time`}
            required
            placeholder="e.g. Weekday mornings"
            value={i.preferredTime}
            onChange={(w) => v("preferredTime", w.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor={`${idPrefix}-source`}>Source</Label>
          <Select value={i.source} onValueChange={(w) => v("source", w ?? "ORGANIC")}>
            <SelectTrigger id={`${idPrefix}-source`} className="w-full">
              <SelectValue placeholder="Source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ORGANIC">Organic</SelectItem>
              <SelectItem value="AD">Ad</SelectItem>
              <SelectItem value="REFERRAL">Referral</SelectItem>
              <SelectItem value="OTHER">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor={`${idPrefix}-notes`}>Notes (optional)</Label>
        <Textarea
          id={`${idPrefix}-notes`}
          rows={3}
          value={i.notes}
          onChange={(w) => v("notes", w.target.value)}
        />
      </div>
      {h === "sent" ? (
        <p className="text-sm text-primary" role="status">
          Thanks — your demo request was sent. We will reach out soon.
        </p>
      ) : null}
      {h === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          {"Something went wrong. Try again or email "}
          {SITE_CONTACT.supportEmail}.
        </p>
      ) : null}
      <Button type="submit" size="lg" disabled={h === "sending"}>
        {h === "sending" ? "Sending…" : "Book a free demo"}
      </Button>
    </form>
  );
}
