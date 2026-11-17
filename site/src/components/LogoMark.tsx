/**
 * ThinkWell AI mark: a bold T inside an open orbit that passes in front
 * of the stem, with a cluster of data pixels at the upper right.
 */
const ORBIT = 'M7.44 33.36A27.5 12 -15 1 0 58.7 28'

export default function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      role="img"
      aria-label="ThinkWell AI"
    >
      <g fill="currentColor">
        <rect x="8" y="10" width="36" height="13" rx="4" />
        <rect x="20" y="20" width="12" height="33" rx="3.5" />
      </g>

      {/* knockout gap around the orbit so it reads in front of the T */}
      <path d={ORBIT} stroke="#ffffff" strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d={ORBIT} stroke="currentColor" strokeWidth="3.1" strokeLinecap="round" fill="none" />

      <g fill="currentColor">
        <rect x="46.4" y="4.6" width="4.3" height="4.3" rx="0.7" />
        <rect x="52.8" y="2" width="3.1" height="3.1" rx="0.6" opacity="0.9" />
        <rect x="57.3" y="8.3" width="4.1" height="4.1" rx="0.7" />
        <rect x="48" y="10.9" width="3.1" height="3.1" rx="0.6" opacity="0.85" />
        <rect x="58.4" y="14.8" width="2.6" height="2.6" rx="0.5" opacity="0.75" />
      </g>
    </svg>
  )
}
