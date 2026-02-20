"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import {
  Ribbon,
  Factory,
  Package,
  Truck,
  ArrowRight,
  CheckCircle,
  Settings,
  Layers,
} from "lucide-react";

export default function NonWovenServicesPage() {
  const t = useTranslations();

  const features = [
    {
      icon: Layers,
      title: "无纺布制品",
      description: "生产各类无纺布材料及制品，广泛应用于服装、包装等领域",
    },
    {
      icon: Ribbon,
      title: "各类制袋",
      description: "提供尼龙带、棉带、松紧带等多种制袋产品",
    },
    {
      icon: Settings,
      title: "定制加工",
      description: "根据客户需求提供个性化定制和加工服务",
    },
    {
      icon: Truck,
      title: "稳定供应",
      description: "充足的库存和生产能力，确保稳定的产品供应",
    },
  ];

  const galleryImages = [
    { src: "/images/wufangbu/bag-01.png" },
    { src: "/images/wufangbu/bag-02.png" },
    { src: "/images/wufangbu/bag-03.png" },
    { src: "/images/wufangbu/bag-04.png" },
    { src: "/images/wufangbu/bag-05.png" },
    { src: "/images/wufangbu/bag-06.png" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-secondary/20 via-background to-primary/5">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge variant="secondary" className="mb-4">
              <Factory className="h-3 w-3 mr-1" />
              玉体制袋厂
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("services.nonWoven.title")}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {t("services.nonWoven.description")}
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                立即咨询
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">样品展示</h2>
            <p className="text-muted-foreground">
              玉体制袋厂生产实拍与产品图集
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl group"
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt="样品展示"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">核心优势</h2>
            <p className="text-muted-foreground">玉体制袋厂专业制造</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Factory className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-4">需要无纺布或制袋产品？</h2>
            <p className="text-muted-foreground mb-8">
              玉体制袋厂期待与您的合作，为您提供优质的产品和服务
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                联系我们
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
