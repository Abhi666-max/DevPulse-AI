import { fetchGitHubData } from "@/actions/github";
import { generateRecruiterReport } from "@/actions/ai";
import { DashboardClient } from "@/components/DashboardClient";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ReportPageProps {
  params: Promise<{ username: string }>;
}

export default async function ReportPage({ params }: ReportPageProps) {
  const { username } = await params;
  
  const data = await fetchGitHubData(username);
  
  // If data fetching failed, pass dummy report so client can show data.error
  let report: any = null;
  if (!data.error) {
    report = await generateRecruiterReport(data);
  }

  return (
    <>
      <div className="absolute top-8 left-8 z-50">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </div>
      <DashboardClient data={data} report={report} />
    </>
  );
}
