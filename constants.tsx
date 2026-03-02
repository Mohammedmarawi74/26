
import React from 'react';

export const COLORS = {
  primary: '#006B3D', // Reef Saudi Green
  secondary: '#DAA520', // Golden Yellow
  background: '#FFFFFF',
  textDark: '#1a1a1a',
  textLight: '#4a4a4a',
};

export const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop";

export const ICON_OPTIONS = [
  'FileText', 'UserCheck', 'AlertCircle', 'Zap', 'Database', 'ShieldCheck', 'Globe', 'HelpCircle'
];

export const INITIAL_SLIDE: any = {
  id: '1',
  header: 'قدمت على دعم برنامج ريف السعودية',
  highlightedHeader: 'وتم رفض طلبك؟',
  subHeader: 'هنا موجز لأسباب رفض طلبات التقديم على الدعم',
  points: [
    { id: 'p1', icon: 'FileText', title: 'عدم وجود وثيقة العمل الحر' },
    { id: 'p2', icon: 'Zap', title: 'نقص في بيانات دراسة الجدوى' },
    { id: 'p3', icon: 'Database', title: 'المنتج المستهدف من المنتجات غير وطنية' },
    { id: 'p4', icon: 'UserCheck', title: 'عدم تطابق بيانات المستفيد بما أفصح عنه' },
  ],
  footerImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop',
  primaryColor: '#006B3D',
  secondaryColor: '#DAA520',
  backgroundColor: '#FFFFFF',
  textColor: '#1a1a1a',
};
