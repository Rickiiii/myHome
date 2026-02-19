import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, company, message } = body;

    // 创建留言记录
    const record = {
      id: Date.now(),
      name,
      phone,
      email: email || "未填写",
      company: company || "未填写",
      message,
      createdAt: new Date().toISOString(),
    };

    // 确保数据目录存在
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // 读取现有留言
    const filePath = path.join(dataDir, "messages.json");
    let messages = [];
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      messages = JSON.parse(data);
    }

    // 添加新留言
    messages.push(record);

    // 保存到文件
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

    return NextResponse.json(
      { success: true, message: "留言提交成功" },
      { status: 200 }
    );
  } catch (error) {
    console.error("保存留言失败:", error);
    return NextResponse.json(
      { success: false, message: "提交失败，请稍后重试" },
      { status: 500 }
    );
  }
}

// 获取所有留言（可选，用于管理后台）
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "messages.json");

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ messages: [] }, { status: 200 });
    }

    const data = fs.readFileSync(filePath, "utf-8");
    const messages = JSON.parse(data);

    return NextResponse.json({ messages }, { status: 200 });
  } catch (error) {
    console.error("读取留言失败:", error);
    return NextResponse.json(
      { success: false, message: "读取失败" },
      { status: 500 }
    );
  }
}
