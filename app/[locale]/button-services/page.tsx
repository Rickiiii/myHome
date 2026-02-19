"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import {
  CircleDot,
  Scissors,
  Clock,
  CheckCircle,
  ArrowRight,
  Factory,
  Package,
  Settings,
} from "lucide-react";

export default function ButtonServicesPage() {
  const t = useTranslations();

  const features = [
    {
      icon: Scissors,
      title: "各类纽扣定制",
      description: "支持树脂扣、金属扣、贝壳扣、木扣等多种材质纽扣定制加工",
    },
    {
      icon: Clock,
      title: "快速打样",
      description: "48小时内完成样品制作，让您快速确认效果",
    },
    {
      icon: Factory,
      title: "批量生产",
      description: "拥有先进的钉纽扣设备，日产能达数万件",
    },
    {
      icon: CheckCircle,
      title: "品质检验",
      description: "严格的质检流程，确保每件产品都符合标准",
    },
  ];

  const process = [
    { step: "01", title: "需求沟通", desc: "了解客户的具体需求和要求" },
    { step: "02", title: "样品制作", desc: "根据需求制作样品供客户确认" },
    { step: "03", title: "批量生产", desc: "确认样品后进行批量生产" },
    { step: "04", title: "质检交付", desc: "严格质检后按时交付产品" },
  ];

  const images = [
    { src: "/images/dingniu/button-01.jpg" },
    { src: "/images/dingniu/button-02.jpg" },
    { src: "/images/dingniu/button-03.jpg" },
    { src: "/images/dingniu/button-04.jpg" },
    { src: "/images/dingniu/button-05.jpg" },
    { src: "/images/dingniu/button-06.jpg" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge variant="secondary" className="mb-4">
              <CircleDot className="h-3 w-3 mr-1" />
              专业服务
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("services.button.title")}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {t("services.button.description")}
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
            <p className="text-muted-foreground">专业的钉纽扣加工设备与工艺</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
            {images.map((image, index) => (
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
            <h2 className="text-3xl font-bold mb-4">服务特色</h2>
            <p className="text-muted-foreground">专业的钉纽扣加工服务</p>
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

      {/* Process Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">服务流程</h2>
            <p className="text-muted-foreground">简单四步，轻松合作</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-primary/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Settings className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-4">需要钉纽扣服务？</h2>
            <p className="text-muted-foreground mb-8">
              欢迎联系我们，我们将为您提供专业的钉纽扣加工解决方案
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
