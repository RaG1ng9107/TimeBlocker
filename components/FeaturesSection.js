import {
  CalendarDays,
  MousePointer,
  Clock,
  Palette,
  Bell,
  CalendarClock,
} from "lucide-react";

const features = [
  {
    name: "Drag-and-drop task management",
    description:
      "Easily organize your tasks with intuitive drag-and-drop functionality.",
    icon: MousePointer,
  },
  {
    name: "Multiple views",
    description: "Plan your time with daily, weekly, and monthly views.",
    icon: CalendarDays,
  },
  {
    name: "Customizable time blocks",
    description:
      "Create and adjust time blocks with precise start and end times.",
    icon: Clock,
  },
  {
    name: "Color-coded tasks",
    description: "Categorize and visualize your tasks with custom colors.",
    icon: Palette,
  },
  {
    name: "Reminders and notifications",
    description: "Stay on track with timely reminders and notifications.",
    icon: Bell,
  },
  {
    name: "Calendar integration",
    description:
      "Seamlessly sync with popular calendar apps like Google Calendar and Outlook.",
    icon: CalendarClock,
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Powerful Features to Boost Your Productivity
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our time blocking tools are designed to help you make the most of
            every minute.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
