
import { Clock } from "lucide-react";

const ScheduleSection = () => {
  const scheduleItems = [
    { time: "9AM - 10AM", activity: "Mingle, create teams, hackathon introduction" },
    { time: "10AM - 4PM", activity: "Hacking" },
    { time: "4PM - 6PM", activity: "Presentations and Judging" },
    { time: "6PM - 7:30PM", activity: "Happy Hour" }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="animate-slide-up">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Full Schedule</h2>
          <div className="max-w-3xl mx-auto">
            {scheduleItems.map((item, index) => (
              <div key={index} className="flex items-center mb-8 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 mr-6">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xl font-semibold text-white">{item.time}</div>
                  <div className="text-gray-300">{item.activity}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
