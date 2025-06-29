
const LocationSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="animate-slide-up">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Location</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">164 Townsend St, San Francisco</h3>
                <p className="text-gray-300">Join us in the heart of SOMA for an amazing day of building!</p>
              </div>
              <div className="rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.378024727!2d-122.39483348468186!3d37.779819779759644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7fd7d02392cb%3A0xf1264d1936610a7b!2s164%20Townsend%20St%2C%20San%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
