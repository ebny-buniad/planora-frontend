"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Nusrat Jahan",
    comment: "I didn’t expect creating events to be this easy. Really impressed!",
    rating: 5,
  },
  {
    name: "Tanvir Hasan",
    comment: "The UI is clean and browsing events feels very smooth.",
    rating: 4,
  },
  {
    name: "Mehedi Rahman",
    comment: "The payment system and approval flow feel very professional.",
    rating: 5,
  },
  {
    name: "Farzana Akter",
    comment: "Managing private events has become much easier.",
    rating: 4,
  },
  {
    name: "Sabbir Hossain",
    comment: "Overall experience is awesome. Looking forward to more features!",
    rating: 4,
  },
  {
    name: "Jakir Hossain",
    comment: "Overall experience is awesome. Looking forward to more features!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          What Users Say
        </h2>
        <p className="mt-3 text-muted-foreground">
          Real experiences from our community
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Card key={index} className="rounded-2xl">
              <CardContent className="p-6 text-left space-y-4">
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground">
                  &ldquo;{item.comment}&ldquo;
                </p>

                <h4 className="font-semibold">{item.name}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}