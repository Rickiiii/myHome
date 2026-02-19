"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";
import { Factory, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Factory className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">家族企业</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("about.description")}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("footer.slogan")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t("nav.home")}</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/button-services"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("nav.buttonService")}
              </Link>
              <Link
                href="/non-woven-services"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("nav.nonWovenService")}
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("nav.contact")}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">联系方式</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  浙江省温州市苍南县钱库镇兴苏路132号
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                <span className="text-sm text-muted-foreground">
                  +86 15869120517
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                <span className="text-sm text-muted-foreground">
                  ruijiang616@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
