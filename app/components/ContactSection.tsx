'use client'

import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const form = e.currentTarget;
      const formData = new FormData(form);

      const payload = {
        name: (formData.get("name") || "").toString(),
        email: (formData.get("email") || "").toString(),
        phone: (formData.get("phone") || "").toString(),
        message: (formData.get("message") || "").toString(),
      };

      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container max-w-5xl">
        <AnimatedSection className="text-center mb-16">
          <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-3">Contact</p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Parlons de votre projet
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Demandez votre devis gratuit et sans engagement. Notre équipe vous répond sous 24h.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-5 gap-12">
          <AnimatedSection className="md:col-span-3">
            {submitted ? (
              <div className="text-center py-12">
                <h3 className="font-heading text-2xl text-foreground mb-3">Merci pour votre demande !</h3>
                <p className="font-body text-muted-foreground">Nous reviendrons vers vous très rapidement.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Votre email"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Votre téléphone"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Décrivez votre projet..."
                  className="w-full px-4 py-3 bg-muted border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-accent transition-colors duration-300"
                >
                  Envoyer ma demande
                </button>
              </form>
            )}
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="md:col-span-2 space-y-8">
            <div className="flex gap-4 items-start">
              <Mail className="w-5 h-5 text-primary mt-0.5" strokeWidth={1.5} />
              <div>
                <h4 className="font-heading text-base font-semibold text-foreground">Email</h4>
                <p className="font-body text-muted-foreground text-sm">contact@paysages-azureens.fr</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Phone className="w-5 h-5 text-primary mt-0.5" strokeWidth={1.5} />
              <div>
                <h4 className="font-heading text-base font-semibold text-foreground">Téléphone</h4>
                <p className="font-body text-muted-foreground text-sm">06 46 80 09 12</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <MapPin className="w-5 h-5 text-primary mt-0.5" strokeWidth={1.5} />
              <div>
                <h4 className="font-heading text-base font-semibold text-foreground">Zone d'intervention</h4>
                <p className="font-body text-muted-foreground text-sm">Nice, Cannes, Antibes, Grasse<br/>et toute la Côte d'Azur</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
