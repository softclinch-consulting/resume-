import {
  Phone,
  Mail,
  MapPin,
  Award,
  Briefcase,
  GraduationCap,
  Settings,
  Shield,
  CheckCircle2,
  FileCheck,
} from 'lucide-react';
import profileImage from '../../imports/sample-clear.jpeg';

export function Resume() {
  return (
    <div className="min-h-screen py-8 px-4" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-[210mm] mx-auto flex flex-col gap-3">
        <div className="resume-page bg-white shadow-md" style={{ width: '210mm' }}>
          <header className="px-10 py-8 flex items-start justify-between gap-6" style={{ backgroundColor: '#1F3A5F' }}>
            <div className="flex-1 pr-4">
              <h1 className="text-[32px] font-bold tracking-tight mb-1 text-white">
                VINOTH GANAPATHI
              </h1>
              <p className="text-[16px] font-semibold mb-4" style={{ color: '#2CA6A4' }}>
                Facilities Management Engineer
              </p>
              <div className="flex flex-wrap gap-5 text-[11px] text-white/90">
                <div className="flex items-center gap-2">
                  <Phone size={13} />
                  <span className="font-bold text-white">+65 97784672</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={13} />
                  <span>vinoth.ganapathi@email.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={13} />
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 self-start">
              <img
                src={profileImage}
                alt="Vinoth Ganapathi"
                className="w-24 h-24 rounded-full border-4 border-white/20 object-cover shadow-lg"
              />
            </div>
          </header>

          <div className="grid grid-cols-[30%_70%] gap-5 p-6">
            <div className="space-y-4">
              <div className="rounded-lg border p-4" style={{ backgroundColor: '#F3F4F6', borderColor: '#E5E7EB' }}>
                <h2 className="text-[13px] font-bold uppercase tracking-wide mb-3 flex items-center gap-2" style={{ color: '#1F3A5F' }}>
                  <Settings size={16} style={{ color: '#2CA6A4' }} />
                  Core Skills
                </h2>
                <div className="space-y-2">
                  {[
                    'Facility Operations',
                    'HVAC / Electrical / Plumbing',
                    'Preventive Maintenance',
                    'Vendor Management',
                    'Safety Compliance (WSH)',
                    'Fire Protection Systems',
                    'Project Management',
                    'Team Leadership',
                  ].map((skill, index) => (
                    <div key={index} className="flex items-start gap-2 text-[10px]" style={{ color: '#111827' }}>
                      <CheckCircle2 size={12} className="mt-0.5 flex-shrink-0" style={{ color: '#2CA6A4' }} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border p-4" style={{ backgroundColor: '#F3F4F6', borderColor: '#E5E7EB' }}>
                <h2 className="text-[13px] font-bold uppercase tracking-wide mb-3 flex items-center gap-2" style={{ color: '#1F3A5F' }}>
                  <Award size={16} style={{ color: '#2CA6A4' }} />
                  Certifications
                </h2>
                <ul className="space-y-2">
                  {[
                    'WSQ Workplace Safety (WSH) Level 3',
                    'Managing Work at Height (MWAH)',
                    'Fire Safety Manager (FSM)',
                    'CPR + AED Certified',
                  ].map((cert, index) => (
                    <li key={index} className="text-[10px] flex items-start gap-2" style={{ color: '#111827' }}>
                      <span className="font-bold" style={{ color: '#2CA6A4' }}>&bull;</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border p-4" style={{ backgroundColor: '#F3F4F6', borderColor: '#E5E7EB' }}>
                <h2 className="text-[13px] font-bold uppercase tracking-wide mb-3 flex items-center gap-2" style={{ color: '#1F3A5F' }}>
                  <GraduationCap size={16} style={{ color: '#2CA6A4' }} />
                  Education
                </h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-[10px] font-bold" style={{ color: '#1F3A5F' }}>
                      B.E. Electronics & Communication
                    </h3>
                    <p className="text-[9px]" style={{ color: '#6B7280' }}>
                      Anna University
                    </p>
                    <p className="text-[9px]" style={{ color: '#6B7280' }}>
                      2012 - 2016
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold" style={{ color: '#1F3A5F' }}>
                      Higher Secondary (HSC)
                    </h3>
                    <p className="text-[9px]" style={{ color: '#6B7280' }}>
                      AKT Memorial School
                    </p>
                    <p className="text-[9px]" style={{ color: '#6B7280' }}>
                      2010 - 2012
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-4" style={{ backgroundColor: '#F3F4F6', borderColor: '#E5E7EB' }}>
                <h2 className="text-[13px] font-bold uppercase tracking-wide mb-3" style={{ color: '#1F3A5F' }}>
                  Personal Info
                </h2>
                <div className="space-y-1.5">
                  <p className="text-[9px]" style={{ color: '#6B7280' }}>
                    <span className="font-semibold" style={{ color: '#111827' }}>DOB:</span> 15 Aug 1994
                  </p>
                  <p className="text-[9px]" style={{ color: '#6B7280' }}>
                    <span className="font-semibold" style={{ color: '#111827' }}>Nationality:</span> Indian
                  </p>
                  <p className="text-[9px]" style={{ color: '#6B7280' }}>
                    <span className="font-semibold" style={{ color: '#111827' }}>Status:</span> Single
                  </p>
                  <p className="text-[9px]" style={{ color: '#6B7280' }}>
                    <span className="font-semibold" style={{ color: '#111827' }}>Languages:</span> English, Tamil, Hindi
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg border shadow-sm relative overflow-hidden" style={{ borderColor: '#E5E7EB' }}>
                <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: '#2CA6A4' }}></div>
                <div className="p-4 pl-5">
                  <h2 className="text-[14px] font-bold uppercase tracking-wide mb-3" style={{ color: '#1F3A5F' }}>
                    Professional Summary
                  </h2>
                  <div
                    className="inline-flex items-center rounded-full px-3 py-1 mb-3 text-[10px] font-bold uppercase tracking-wide"
                    style={{ backgroundColor: '#E6FFFB', color: '#0F766E' }}
                  >
                    Current Employer: Lewe Engineering Pte Ltd | Client: AMS-AMK
                  </div>
                  <p className="text-[11px] leading-relaxed" style={{ color: '#111827' }}>
                    Results-driven Facilities Management Engineer with <strong>7+ years</strong> of experience in facility operations, maintenance, and safety compliance. Currently working with <strong>Lewe Engineering Pte Ltd</strong> for client <strong>AMS-AMK</strong> in the role of <strong>Coordinator</strong>. Strong background in HVAC systems, fire protection, preventive maintenance, vendor coordination, and workplace safety, with previous experience supporting major facilities in Singapore.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm p-4" style={{ borderColor: '#E5E7EB' }}>
                <div className="flex items-start gap-2 mb-2">
                  <Briefcase size={16} className="mt-0.5" style={{ color: '#2CA6A4' }} />
                  <div className="flex-1">
                    <h3 className="text-[12px] font-bold" style={{ color: '#2CA6A4' }}>
                      Lewe Engineering Pte Ltd - Singapore
                    </h3>
                    <p className="text-[11px] font-semibold" style={{ color: '#1F3A5F' }}>
                      Client: AMS-AMK | Role: Coordinator
                    </p>
                    <p className="text-[9px]" style={{ color: '#6B7280' }}>
                      Current
                    </p>
                  </div>
                </div>
                <ul className="space-y-1.5 ml-6 mt-3">
                  {[
                    'Managed daily operations and maintenance of 15-story commercial facility, overseeing HVAC, electrical, plumbing, and fire protection systems serving 800+ employees',
                    'Implemented preventive maintenance program that reduced equipment downtime by 35% and extended asset lifecycle by optimizing maintenance schedules',
                    'Led team of 8 technicians, coordinating shift operations and ensuring 24/7 facility availability while maintaining WSH compliance standards',
                    'Supervised vendor contracts worth SGD 2.5M annually, negotiating service agreements and ensuring quality delivery within budget constraints',
                  ].map((item, index) => (
                    <li key={index} className="text-[10px] leading-relaxed" style={{ color: '#111827' }}>
                      &bull; {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg border shadow-sm p-4" style={{ borderColor: '#E5E7EB' }}>
                <div className="flex items-start gap-2 mb-2">
                  <Briefcase size={16} className="mt-0.5" style={{ color: '#2CA6A4' }} />
                  <div className="flex-1">
                    <h3 className="text-[12px] font-bold" style={{ color: '#2CA6A4' }}>
                      KOYO Engineering Ltd - Singapore
                    </h3>
                    <p className="text-[11px] font-semibold" style={{ color: '#1F3A5F' }}>
                      Facilities Engineer | One Raffles Place, HDB Hub
                    </p>
                    <p className="text-[9px]" style={{ color: '#6B7280' }}>
                      January 2016 - February 2019
                    </p>
                  </div>
                </div>
                <ul className="space-y-1.5 ml-6 mt-3">
                  {[
                    'Managed maintenance operations across two premier facilities: 63-story One Raffles Place tower and HDB Hub complex, ensuring optimal system performance',
                    'Coordinated emergency response procedures and equipment repairs, maintaining 98% uptime for critical building systems',
                    'Executed chiller plant optimization project reducing energy consumption by 18% while maintaining comfort parameters',
                    'Maintained comprehensive maintenance logs and compliance documentation for BCA inspections and regulatory requirements',
                  ].map((item, index) => (
                    <li key={index} className="text-[10px] leading-relaxed" style={{ color: '#111827' }}>
                      &bull; {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="resume-page bg-white shadow-md p-8" style={{ width: '210mm' }}>
          <section className="mb-6">
            <h2 className="text-[15px] font-bold uppercase tracking-wide mb-4 pb-2 border-b-2" style={{ color: '#1F3A5F', borderColor: '#2CA6A4' }}>
              Key Responsibilities
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg border p-4 shadow-sm" style={{ borderColor: '#E5E7EB' }}>
                <h3 className="text-[12px] font-bold mb-2 flex items-center gap-2" style={{ color: '#1F3A5F' }}>
                  <Settings size={14} style={{ color: '#2CA6A4' }} />
                  Operations & Maintenance
                </h3>
                <ul className="space-y-1 ml-5">
                  {[
                    'Monitor and operate building management systems (BMS)',
                    'Perform routine MEP system inspections',
                    'Troubleshoot equipment failures and coordinate repairs',
                    'Maintain asset registers and documentation',
                  ].map((item, index) => (
                    <li key={index} className="text-[10px] leading-relaxed" style={{ color: '#111827' }}>
                      &bull; {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg border p-4 shadow-sm" style={{ borderColor: '#E5E7EB' }}>
                <h3 className="text-[12px] font-bold mb-2 flex items-center gap-2" style={{ color: '#1F3A5F' }}>
                  <Shield size={14} style={{ color: '#2CA6A4' }} />
                  Health & Safety
                </h3>
                <ul className="space-y-1 ml-5">
                  {[
                    'Ensure compliance with WSH regulations and building codes',
                    'Conduct safety briefings and risk assessments',
                    'Implement safe work procedures for high-risk activities',
                    'Investigate incidents and implement corrective actions',
                  ].map((item, index) => (
                    <li key={index} className="text-[10px] leading-relaxed" style={{ color: '#111827' }}>
                      &bull; {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg border p-4 shadow-sm" style={{ borderColor: '#E5E7EB' }}>
                <h3 className="text-[12px] font-bold mb-2 flex items-center gap-2" style={{ color: '#1F3A5F' }}>
                  <FileCheck size={14} style={{ color: '#2CA6A4' }} />
                  Project Management
                </h3>
                <ul className="space-y-1 ml-5">
                  {[
                    'Plan and execute facility improvement projects',
                    'Coordinate with contractors and stakeholders',
                    'Prepare technical specifications and cost estimates',
                    'Commission new equipment and systems',
                  ].map((item, index) => (
                    <li key={index} className="text-[10px] leading-relaxed" style={{ color: '#111827' }}>
                      &bull; {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg border p-4 shadow-sm" style={{ borderColor: '#E5E7EB' }}>
                <h3 className="text-[12px] font-bold mb-2 flex items-center gap-2" style={{ color: '#1F3A5F' }}>
                  <Shield size={14} style={{ color: '#2CA6A4' }} />
                  Fire & Safety Systems
                </h3>
                <ul className="space-y-1 ml-5">
                  {[
                    'Maintain and test fire alarm systems and sprinklers',
                    'Coordinate with SCDF for safety inspections',
                    'Ensure emergency systems functionality',
                    'Manage fire safety training programs',
                  ].map((item, index) => (
                    <li key={index} className="text-[10px] leading-relaxed" style={{ color: '#111827' }}>
                      &bull; {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-[15px] font-bold uppercase tracking-wide mb-4 pb-2 border-b-2" style={{ color: '#1F3A5F', borderColor: '#2CA6A4' }}>
              Key Achievements
            </h2>
            <div className="bg-white rounded-lg border p-4 shadow-sm" style={{ borderColor: '#E5E7EB' }}>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 rounded" style={{ backgroundColor: '#F3F4F6' }}>
                  <div className="text-[20px] font-bold mb-1" style={{ color: '#2CA6A4' }}>35%</div>
                  <p className="text-[9px]" style={{ color: '#6B7280' }}>Reduction in Equipment Downtime</p>
                </div>
                <div className="text-center p-3 rounded" style={{ backgroundColor: '#F3F4F6' }}>
                  <div className="text-[20px] font-bold mb-1" style={{ color: '#2CA6A4' }}>98%</div>
                  <p className="text-[9px]" style={{ color: '#6B7280' }}>Critical Systems Uptime</p>
                </div>
                <div className="text-center p-3 rounded" style={{ backgroundColor: '#F3F4F6' }}>
                  <div className="text-[20px] font-bold mb-1" style={{ color: '#2CA6A4' }}>Zero</div>
                  <p className="text-[9px]" style={{ color: '#6B7280' }}>Lost-Time Injuries (4 Years)</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-[15px] font-bold uppercase tracking-wide mb-4 pb-2 border-b-2" style={{ color: '#1F3A5F', borderColor: '#2CA6A4' }}>
              Technical Competencies
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg border p-4 shadow-sm" style={{ borderColor: '#E5E7EB' }}>
                <h3 className="text-[11px] font-bold mb-2" style={{ color: '#1F3A5F' }}>Systems & Equipment</h3>
                <div className="flex flex-wrap gap-2">
                  {['HVAC Systems', 'BMS/SCADA', 'Fire Alarm Systems', 'Electrical Distribution', 'Plumbing Systems'].map((tech, i) => (
                    <span key={i} className="text-[9px] px-2 py-1 rounded" style={{ backgroundColor: '#F3F4F6', color: '#111827' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg border p-4 shadow-sm" style={{ borderColor: '#E5E7EB' }}>
                <h3 className="text-[11px] font-bold mb-2" style={{ color: '#1F3A5F' }}>Standards & Compliance</h3>
                <div className="flex flex-wrap gap-2">
                  {['WSH Regulations', 'BCA Requirements', 'SCDF Standards', 'ISO 9001', 'Green Mark'].map((std, i) => (
                    <span key={i} className="text-[9px] px-2 py-1 rounded" style={{ backgroundColor: '#F3F4F6', color: '#111827' }}>
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mb-4">
            <h2 className="text-[15px] font-bold uppercase tracking-wide mb-4 pb-2 border-b-2" style={{ color: '#1F3A5F', borderColor: '#2CA6A4' }}>
              Additional Information
            </h2>
            <div className="bg-white rounded-lg border p-4 shadow-sm" style={{ borderColor: '#E5E7EB' }}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-[11px] font-bold mb-2" style={{ color: '#1F3A5F' }}>Availability</h3>
                  <ul className="space-y-1">
                    <li className="text-[10px] flex items-center gap-2" style={{ color: '#111827' }}>
                      <CheckCircle2 size={12} style={{ color: '#2CA6A4' }} />
                      Immediate availability
                    </li>
                    <li className="text-[10px] flex items-center gap-2" style={{ color: '#111827' }}>
                      <CheckCircle2 size={12} style={{ color: '#2CA6A4' }} />
                      Willing to work shifts and weekends
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[11px] font-bold mb-2" style={{ color: '#1F3A5F' }}>Mobility</h3>
                  <ul className="space-y-1">
                    <li className="text-[10px] flex items-center gap-2" style={{ color: '#111827' }}>
                      <CheckCircle2 size={12} style={{ color: '#2CA6A4' }} />
                      Open to relocation
                    </li>
                    <li className="text-[10px] flex items-center gap-2" style={{ color: '#111827' }}>
                      <CheckCircle2 size={12} style={{ color: '#2CA6A4' }} />
                      Valid passport for international assignments
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-6 pt-4 border-t text-center" style={{ borderColor: '#E5E7EB' }}>
            <p className="text-[9px]" style={{ color: '#6B7280' }}>
              References available upon request | Updated April 2026
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          .resume-page {
            min-height: 297mm;
          }
          body {
            margin: 0;
            padding: 0;
          }
          .min-h-screen {
            min-height: 0;
            padding: 0;
          }
          .py-8 {
            padding-top: 0;
            padding-bottom: 0;
          }
          .resume-page + .resume-page {
            margin-top: 0;
            page-break-before: always;
          }
          .shadow-md {
            box-shadow: none;
          }
        }

        @page {
          size: A4;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
