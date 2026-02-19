"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  Factory,
  CircleDot,
} from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        alert("发送失败，请稍后重试");
      }
    } catch (error) {
      console.error("发送失败:", error);
      alert("发送失败，请稍后重试");
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "地址",
      value: "浙江省温州市苍南县钱库镇兴苏路132号",
    },
    {
      icon: Phone,
      label: "电话",
      value: "+86 15869120517",
    },
    {
      icon: Mail,
      label: "邮箱",
      value: "ruijiang616@gmail.com",
    },
    {
      icon: Clock,
      label: "工作时间",
      value: "周一至周日 8:00-22:00",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge variant="secondary" className="mb-4">
              <MessageCircle className="h-3 w-3 mr-1" />
              联系我们
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("title")}
            </h1>
            <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto items-start">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Business Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {/* Button Service */}
                <Card className="border-l-4 border-l-primary">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <CircleDot className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-base">
                        {t("info.buttonService")}
                      </CardTitle>
                    </div>
                  </CardHeader>
                </Card>

                {/* Non-woven Service */}
                <Card className="border-l-4 border-l-accent">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Factory className="h-5 w-5 text-accent" />
                      </div>
                      <CardTitle className="text-base">
                        {t("info.nonWovenService")}
                      </CardTitle>
                    </div>
                  </CardHeader>
                </Card>
              </div>

              {/* Contact Details */}
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-5">
                    {contactInfo.map((item, index) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                          <item.icon className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-0.5">
                            {item.label}
                          </p>
                          <p className="font-medium">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{t("form.submit")}</CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        留言提交成功！
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        我们会尽快与您联系
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="name">{t("form.name")}</Label>
                          <Input
                            id="name"
                            placeholder={t("form.name")}
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">{t("form.phone")}</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder={t("form.phone")}
                            required
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="email">{t("form.email")}</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder={t("form.email")}
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">{t("form.company")}</Label>
                          <Input
                            id="company"
                            placeholder={t("form.company")}
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">{t("form.message")}</Label>
                        <Textarea
                          id="message"
                          placeholder={t("form.message")}
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full group"
                        size="lg"
                        disabled={isLoading}
                      >
                        <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        {isLoading ? "发送中..." : t("form.submit")}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
