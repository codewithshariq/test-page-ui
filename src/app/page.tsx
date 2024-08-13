import Image from "next/image";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

export default function Home() {
  const cards = [
    {
      title: "Easy Booking Process",
      description:
        "Our platform simplifies the appointment booking process, saving you time and effort.",
      image: "/easy-booking.png",
    },
    {
      title: "Wide Range of Services",
      description:
        "Find appointments for various services, from healthcare to government agencies.",
      image: "/services.png",
    },
    {
      title: "Fastest Appointments",
      description:
        "Get the earliest available appointments, ensuring you don't have to wait.",
      image: "/appointments.png",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col py-4 bg-white text-black">
      <nav className="flex justify-between items-center w-full px-16 h-[72px] text-gray-light text-base font-semibold">
        <ul className="flex items-center gap-x-8">
          <li>Contact</li>
          <li>Services</li>
          <li className="flex items-center shrink-0 gap-x-1">
            About Us
            <MdKeyboardArrowDown className="h-6 w-6 fill-black" />
          </li>
        </ul>
        <button className="bg-primary-light text-white py-2 px-5 rounded-2xl text-base font-bold">
          Book Now
        </button>
      </nav>
      <div className="relative flex w-full items-center h-[900px] bg-primary px-16">
        <div className="flex flex-col gap-y-6">
          <h2 className="text-primary-foreground text-[3.25rem] leading-[4.2rem] max-w-[39.68rem] font-bold">
            Get Appointments Easily with appointmentnow.eu
          </h2>
          <p className="text-primary-foreground text-lg leading-[1.6875rem] max-w-[35rem] font-bold">
            Termin.eu is the solution for hassle-free appointment booking in
            Germany.
          </p>
          <div className="flex pt-4 gap-x-4">
            <button className="bg-secondary text-white text-base font-bold py-3 px-6 rounded-2xl">
              Book Now
            </button>
            <button className="bg-primary text-white text-base font-normal py-3 px-6 rounded-2xl border border-solid border-white">
              Learn More
            </button>
          </div>
        </div>
        <Image
          src="/global.png"
          alt="hero-image"
          className="absolute right-0 bottom-0"
          width={824}
          height={751}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="relative flex flex-col bg-white h-[69.125rem] px-16 py-[112px]">
        <Image
          src="/yellow-ballon.png"
          alt="ballon"
          width={267}
          height={346}
          className="absolute right-0 top-0"
        />
        <Image
          src="/purple-ballon.png"
          alt="ballon"
          width={415}
          height={173}
          className="absolute right-[379px] bottom-0"
        />
        <div className="relative flex flex-col max-w-[48rem] mb-[80px]">
          <p className="text-base font-semibold mb-4">Effortless</p>
          <h2 className="font-bold text-black text-[3rem] leading-[3.6rem] mb-6">
            Streamline Your Booking Process with Ease
          </h2>
          <p className="font-normal text-lg leading-[1.6875rem]">
            appointmentnow.eu offers a simple and user-friendly platform that
            allows you to book appointments from various German websites quickly
            and conveniently. With our wide range of services and fastest
            appointment options, you can easily find and secure the appointments
            you need.
          </p>
          <div className="absolute left-[97px] top-0 h-[111px] w-[111px] bg-primary-light opacity-50 rounded-full" />
        </div>
        <div className="flex flex-col gap-y-12">
          <div className="flex justify-between">
            {cards.map((card, index) => {
              return (
                <div
                  className="max-w-[25.3125rem] flex flex-col gap-y-8"
                  key={index}
                >
                  <Image
                    src={card.image}
                    alt="card-image"
                    width={405}
                    height={240}
                    style={{ objectFit: "cover", cursor: "pointer" }}
                  />
                  <div className="flex flex-col gap-y-6">
                    <h3 className="font-bold text-[2rem] leading-[2.6rem]">
                      {card.title}
                    </h3>
                    <p className="text-base font-normal">{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex pt-4 gap-x-4">
            <button className="bg-tertiary py-3 px-6 rounded-2xl text-gray-light">
              Learn More
            </button>
            <button className="flex gap-x-2 items-center bg-transparent py-3 px-6 rounded-2xl text-gray-light">
              Book Now
              <MdKeyboardArrowRight className="h-6 w-6 fill-black" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
