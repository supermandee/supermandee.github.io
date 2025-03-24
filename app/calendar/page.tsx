// app/calendar/page.tsx
import Calendar from 'app/components/calendar';

export default function CalendarPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Year at a Glance</h1>
      <div style={{ position: "relative" }}>
        <Calendar />
        {/* This spacer pushes the content down */}
        <div style={{ height: "1200px" }}></div>
      </div>
    </div>
  );
}