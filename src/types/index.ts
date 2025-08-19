// src/types/index.ts

// Component Props Types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export interface LanguageSelectorProps {
  className?: string;
}

export interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

// State Types
export interface AppState {
  language: string;
  setLanguage: (lang: string) => void;
}
