import React from "react";
import "../services-container/Service.css";
import service_Img1 from '../../../assets/root-canal.webp';
import service_img2 from '../../../assets/dental implants.webp';
import service_img3  from '../../../assets/dental-braces.webp';
import service_img4 from '../../../assets/seramic-crowns.webp';
import service_img5 from '../../../assets/clear-braces.webp';
import service_img6 from '../../../assets/child-dental-care.webp';
import { motion } from 'framer-motion';

const Service = () => {
  return (
    <>
      <section>
        <div className="services-container">
          <h2 className="service-boxes-heading">Dental Services</h2>
          <p className="services-boxes-para">
            Comprehensive dental care and advanced technology and techniques
          </p>
          <div className="service-boxes">
            {/* First Service Box */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="service-box-1"
              transition={{ duration: 1 }}
            >
              <figcaption>
                <img
                  src={service_Img1}
                  alt="root canal"
                  loading="lazy"
                  className="service-img"
                />
              </figcaption>
              <div className="service-box-content">
                <h2 className="service-box-subheading">Root Canal</h2>
                <p className="service-box-para">
                  A root canal treatment is the best way to relieve severe tooth
                  pain and repair an infected tooth without extraction. Our
                  experienced endodontists carefully remove the infection from the
                  tooth root, eliminating discomfort while preserving your natural
                  tooth structure.
                </p>
              </div>
            </motion.div>

            {/* Second Service Box */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="service-box-2"
              transition={{ duration: 1 }}
            >
              <figcaption>
                <img
                  src={service_img2}
                  alt="dental implants"
                  loading="lazy"
                  className="service-img"
                />
              </figcaption>
              <div className="service-box-content">
                <h2 className="service-box-subheading">Dental Implants</h2>
                <p className="service-box-para">
                  If you have lost a tooth due to decay, injury, or gum disease,
                  dental implants are the perfect long-term solution! We
                  carefully place a strong titanium root into your jawbone, just
                  like a natural tooth root. Then, we attach a custom-made crown
                  that looks and feels just like your real tooth.
                </p>
              </div>
            </motion.div>

            {/* Third Service Box */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="service-box-3"
              transition={{ duration: 1 }}
            >
              <figcaption>
                <img
                  src={service_img3}
                  alt="dental braces"
                  loading="lazy"
                  className="service-img"
                />
              </figcaption>
              <div className="service-box-content">
                <h2 className="service-box-subheading">Dental Braces</h2>
                <p className="service-box-para">
                  Do you have crooked teeth, gaps, or bite issues? Dental braces
                  are the best way to gently move your teeth into perfect
                  alignment, giving you a beautiful, confident smile! At Vishnu
                  Dental Clinic, Chilakaluripet, our experienced orthodontists
                  provide customized braces treatment to correct misalignment
                  and improve oral health. Whether you're a teen or an adult, we
                  have the right braces for you.
                </p>
              </div>
            </motion.div>

            {/* Fourth Service Box */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="service-box-4"
              transition={{ duration: 1 }}
            >
              <figcaption>
                <img
                  src={service_img4}
                  alt="ceramic crowns"
                  loading="lazy"
                  className="service-img"
                />
              </figcaption>
              <div className="service-box-content">
                <h2 className="service-box-subheading">Ceramic Crowns</h2>
                <p className="service-box-para">
                  Do you have a damaged, discolored, or weak tooth? Ceramic
                  crowns are the perfect solution to restore your tooth’s
                  strength, function, and natural appearance. At Vishnu Dental
                  Clinic, Chilakaluripet, our expert dentists provide
                  high-quality tooth-colored ceramic crowns that blend
                  seamlessly with your natural teeth.
                </p>
              </div>
            </motion.div>

            {/* Fifth Service Box */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="service-box-5"
              transition={{ duration: 1 }}
            >
              <figcaption>
                <img
                  src={service_img5}
                  alt="clear braces"
                  loading="lazy"
                  className="service-img"
                />
              </figcaption>
              <div className="seevice-box-content">
                <h2 className="service-box-subheading">Clear Braces</h2>
                <p className="service-box-para">
                  Want a perfect smile without the hassle of metal braces? Clear
                  braces (invisible aligners) offer a discreet and comfortable
                  way to straighten your teeth. At Vishnu Dental Clinic,
                  Chilakaluripet, our expert dentists customize clear aligners
                  to gently shift your teeth into place, giving you a beautiful,
                  confident smile without anyone noticing.
                </p>
              </div>
            </motion.div>

            {/* Sixth Service Box */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="service-box-6"
              transition={{ duration: 1 }}
            >
              <figcaption>
                <img
                  src={service_img6}
                  alt="child dental care"
                  loading="lazy"
                  className="service-img"
                />
              </figcaption>
              <div className="service-box-content">
                <h2 className="service-box-subheading">Child Dental Care</h2>
                <p className="service-box-para">
                  At Vishnu Dental Clinic, Chilakaluripet, we make dental care
                  fun and stress-free for children! Our pediatric dentists
                  specialize in preventive and gentle treatments, ensuring your
                  child’s teeth stay strong and healthy from an early age.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
