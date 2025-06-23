// components/ContactSection.tsx
import RegistrationForm from "./registrationform";

const ContactSection = () => (
  <section id="contact" className="bg-black text-white xl:py-14 py-10">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Google Map */}
        <div className="h-96 lg:h-full w-full flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2872.930416976695!2d-79.593000684493!3d44.2989149791035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ab30c45167e43%3A0x6b8c9284244795b5!2sWebster%20Blvd%20%26%20Benson%20St%2C%20Innisfil%2C%20ON%20L9S%200K9!5e0!3m2!1sen!2sca!4v1672534578901!5m2!1sen!2sca"
            width="100%"
            height="400px"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          />
        </div>

        {/* Contact Form */}
        <div>
          <RegistrationForm />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
