export default function VisaDetailsMap() {
    return (
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104488.72128303786!2d-80.73441578457359!3d35.074922517577015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885425172b21fd49%3A0x746b0871fd403a54!2sIndian%20Trail%2C%20NC%2C%20USA!5e0!3m2!1sen!2sbd!4v1703841214528!5m2!1sen!2sbd"
          className="w-full rounded-lg"
          height={380}
          style={{
            border: 0,
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }