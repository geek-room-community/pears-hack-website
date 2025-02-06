import PearLogo from "../SVGs/PearsLogo1.png"
import "../ContentPages/about.css"
const AboutUs = () => {
  const pearContent = {
    title: "PEARS",
    description:
      "Pear by Holepunch is a combined Peer-to-Peer (P2P) Runtime, Development & Deployment tool. Build, share & extend unstoppable, zero-infrastructure P2P applications for Desktop, Terminal & Mobile. Welcome to the Internet of Peers",
    images: [
      "/api/placeholder/200/150",
      "/api/placeholder/200/150",
      "/api/placeholder/200/150",
      "/api/placeholder/200/150",
    ],
    logo: PearLogo,
  }

  return (
    <div className="mx-auto md:ml-0 max-w-[900px] bg-[#2a2a2a] py-2 px-3 xl:px-6 mb-48 xl:mb-28 2xl:mb-10 rounded-[2.3rem] text-white w-[80%] md:w-[95%] lg:w-[90%] max-h-[60vh] md:max-h-[80vh] overflow-y-auto scrollbar-hide">
      <div className="flex justify-center md:mb-4">
        <div className="flex items-center justify-center bg-[#2a2a2a] rounded-full px-4 py-1">
          <img src={pearContent.logo || "/placeholder.svg"} alt="Pear Logo" className="w-[300px] h-16 xl:w-[700px] xl:h-40 md:w-[500px] md:h-20" />
        </div>
      </div>

      <div className="text-center mb-8">
        <p className="text-[#d1d1d1] text-md md:text-xl lg:text-xl leading-relaxed mb-1 md:mb-4 px-2 py-2 tracking-wide">
          Pear Runtime is an open-source, peer-to-peer (P2P) development platform revolutionizing how apps are built,
          deployed, and distributed. By eliminating the need for servers, it empowers to create secure and
          cost-efficient applications while maintaining full control over data. Pear Runtime is shaping the future of
          the internet where creators and users are in control.
        </p>
        <p className="text-[#d1d1d1] text-md md:text-xl lg:text-2xl md:leading-relaxed mb-3 md:mb-6 px-2 py-3 md:tracking-wider">
          Find out more at pears.com
        </p>
        <a
          href="https://pears.com/"
          className="py-3 px-4 md:px-8 text-lg md:text-xl rounded-[6px] font-bold transition duration-200 bg-[#B6DD48] hover:bg-transparent text-black hover:text-white border border-[#B6DD48]"
        >
          Learn More
        </a>
      </div>
    </div>
  )
}

export default AboutUs

