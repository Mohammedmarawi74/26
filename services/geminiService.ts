
import { SlideData } from "../types";

// مصفوفة أيقونات عشوائية لاستخدامها في النقاط
const AVAILABLE_ICONS = ["FileText", "UserCheck", "AlertCircle", "Zap", "Database", "ShieldCheck"];

/**
 * دالة محلية لتوليد محتوى الكاروسيل دون الحاجة لذكاء اصطناعي خارجي
 * تحافظ على نفس واجهة البيانات لضمان عدم تعطل التطبيق
 */
export const generateCarouselContent = async (topic: string) => {
  // محاكاة تأخير بسيط ليعطي شعور بـ "المعالجة"
  await new Promise(resolve => setTimeout(resolve, 800));

  const words = topic.trim().split(' ');
  const mainSubject = words[0] || "الموضوع";
  const secondWord = words[words.length - 1] || "";

  // توليد 3 شرائح افتراضية بناءً على العنوان المدخل
  const slides = [
    {
      header: "كل ما تود معرفته عن",
      highlightedHeader: topic,
      subHeader: "دليل شامل ومبسط لأهم المعلومات",
      points: [
        { title: `أهمية ${mainSubject} في وقتنا الحالي`, icon: "Zap" },
        { title: `كيفية الاستفادة من ${secondWord}`, icon: "UserCheck" },
        { title: "خطوات البدء والتطبيق العملي", icon: "FileText" },
        { title: "نصائح الخبراء والممارسين", icon: "ShieldCheck" }
      ]
    },
    {
      header: "مميزات وفوائد",
      highlightedHeader: mainSubject,
      subHeader: "لماذا يفضل الجميع هذا التوجه؟",
      points: [
        { title: "توفير الوقت والجهد المبذول", icon: "Zap" },
        { title: "نتائج ملموسة وسريعة", icon: "Database" },
        { title: "سهولة التطبيق للجميع", icon: "UserCheck" },
        { title: "دقة عالية في المخرجات", icon: "ShieldCheck" }
      ]
    },
    {
      header: "الخلاصة والنتائج",
      highlightedHeader: "ابدأ الآن",
      subHeader: "لا تتردد في خوض التجربة",
      points: [
        { title: "تواصل معنا للمزيد", icon: "Zap" },
        { title: "تابع حسابنا للتحديثات", icon: "UserCheck" },
        { title: "شارك المحتوى مع أصدقائك", icon: "FileText" },
        { title: "احفظ المنشور للعودة إليه", icon: "ShieldCheck" }
      ]
    }
  ];

  return { slides };
};
