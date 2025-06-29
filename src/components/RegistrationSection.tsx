
const RegistrationSection = () => {
  return (
    <section className="py-16 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Register Now</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <iframe
              src="https://lu.ma/embed/event/evt-5L5GDEKngBTgA72/simple"
              className="w-full h-[600px] rounded-xl"
              frameBorder="0"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
