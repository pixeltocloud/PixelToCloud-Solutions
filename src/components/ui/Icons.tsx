import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
  size?: number | string;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className = '', style = {}, size = 16, color = 'currentColor' }) => {
  const s = typeof size === 'number' ? `${size}px` : size;

  switch (name) {
    case 'whatsapp':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill={color}>
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      );
    case 'star':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill={color}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case 'arrowRight':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
      );
    case 'arrowDown':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
        </svg>
      );
    case 'bolt':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case 'lock':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case 'comments':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    case 'check':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    case 'checkCircle':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    case 'gauge':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 0-9.95 9h19.9A10 10 0 0 0 12 2z" /><path d="m14 10-3 3" />
        </svg>
      );
    case 'laptop':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="2" y1="20" x2="22" y2="20" />
        </svg>
      );
    case 'cubes':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m21.12 6.4-6.05-3.5a2 2 0 0 0-2.14 0L6.88 6.4a2 2 0 0 0-1 1.73v7a2 2 0 0 0 1 1.73l6.05 3.5a2 2 0 0 0 2.14 0l6.05-3.5a2 2 0 0 0 1-1.73v-7a2 2 0 0 0-1-1.73z" />
          <path d="M3.27 6.96 12 12.01l8.73-5.05" /><path d="M12 22.08V12" />
        </svg>
      );
    case 'chart':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    case 'cloud':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      );
    case 'brain':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-5.04z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-5.04z" />
        </svg>
      );
    case 'key':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="7.5" cy="15.5" r="5.5" /><path d="m21 2-9.6 9.6" /><path d="m15.5 7.5 3 3L22 7l-3-3" />
        </svg>
      );
    case 'user':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
        </svg>
      );
    case 'handshake':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m11 17 2 2a1 1 0 0 0 1.4 0l6.6-6.6a2 2 0 0 0 0-2.8l-1.4-1.4a2 2 0 0 0-2.8 0L14 11" />
          <path d="m7 7-2 2a2 2 0 0 0 0 2.8l6.6 6.6a1 1 0 0 0 1.4 0l2-2" />
        </svg>
      );
    case 'phone':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case 'mail':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case 'idCard':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="18" rx="2" /><circle cx="8" cy="10" r="3" /><path d="M4 18c0-2 2-3 4-3s4 1 4 3" /><line x1="14" y1="9" x2="18" y2="9" /><line x1="14" y1="13" x2="18" y2="13" />
        </svg>
      );
    case 'paperPlane':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      );
    case 'trendUp':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case 'bars':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
          <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      );
    case 'close':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );
    case 'plus':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      );
    case 'invoice':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      );
    case 'tooth':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 3C4 3 3 6 3 9c0 4 1.5 8 3 11 1.2 2.4 3 2 3.5 0 .5-2 1.5-2 2.5-2s2 0 2.5 2c.5 2 2.3 2.4 3.5 0 1.5-3 3-7 3-11 0-3-1-6-4-6-2.5 0-3.5 2-4.5 2S9.5 3 7 3z" />
        </svg>
      );
    case 'gem':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="6 3 18 3 22 9 12 22 2 9 6 3" /><polyline points="11 3 8 9 12 22" /><polyline points="13 3 16 9 12 22" />
        </svg>
      );
    case 'cube':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m21.12 6.4-6.05-3.5a2 2 0 0 0-2.14 0L6.88 6.4a2 2 0 0 0-1 1.73v7a2 2 0 0 0 1 1.73l6.05 3.5a2 2 0 0 0 2.14 0l6.05-3.5a2 2 0 0 0 1-1.73v-7a2 2 0 0 0-1-1.73z" />
        </svg>
      );
    case 'heart':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      );
    case 'calendar':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case 'bell':
      return (
        <svg style={{ width: s, height: s, display: 'inline-block', verticalAlign: 'middle', ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      );
    default:
      return null;
  }
};
