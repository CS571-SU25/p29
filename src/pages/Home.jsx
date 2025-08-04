import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const scrollToNextSection = () => {
    const target = document.getElementById("why-research");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage: "url('/p0/assets/uw-lakeshore.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
        aria-labelledby="home-heading"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backdropFilter: "blur(4px)",
            background: "rgba(0, 0, 0, 0.45)",
            zIndex: 1,
          }}
        />

        <div
          className="d-flex align-items-center justify-content-center text-center"
          style={{
            width: "100vw",
            height: "100vh",
            position: "relative",
            zIndex: 2,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="px-4 py-5"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              padding: "2rem",
              maxWidth: "700px",
              backdropFilter: "blur(6px)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
            }}
          >
            <h1 className="fw-bold mb-3" style={{ color: "#FFD700", fontSize: "3rem" }}>
              LabConnect
            </h1>
            <p className="text-uppercase fw-semibold text-light mb-1">
              Explore Research at UW–Madison
            </p>
            <h2 className="text-light fw-bold mb-3">
              Discover, Connect, and Grow Through Research
            </h2>
            <p className="text-light mb-4">
              Collaborate with UW mentors, join student-friendly labs, and gain hands-on
              experience that advances your future.
            </p>

            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link
                to="/directory"
                className="btn btn-warning btn-lg fw-semibold shadow"
              >
                🔍 Browse Labs
              </Link>
              <button
                onClick={scrollToNextSection}
                className="btn btn-outline-light btn-lg fw-semibold"
              >
                ⬇ Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY RESEARCH SECTION */}
      {/* WHY RESEARCH SECTION */}
      <section
        id="why-research"
        className="py-5 px-4 text-center"
        style={{ backgroundColor: "#f8f9fa", minHeight: "90vh" }}
      >
        <div className="container">
          <h2
            className="display-5 fw-bold mb-4"
            style={{ ccolor: "#DAA520", textShadow: "1px 1px 4px rgba(0,0,0,0.1)" }}
          >
            Why Get Involved in Research?
          </h2>

          <p className="lead text-dark mb-3" style={{ maxWidth: "850px", margin: "0 auto" }}>
            Engaging in research gives you real-world skills, builds connections with faculty,
            and prepares you for graduate school, internships, and beyond.
          </p>

          <p className="text-secondary mb-4" style={{ maxWidth: "850px", margin: "0 auto" }}>
            Whether you're new to research or looking to expand your portfolio,
            UW–Madison has hundreds of active labs ready to support your academic and personal growth.
          </p>

          <hr className="my-4" style={{ maxWidth: "400px", margin: "2rem auto", borderColor: "#FFD700" }} />

          <h3 className="fw-bold mb-3" style={{ color: "#DAA520"}}>What is LabConnect?</h3>
          <p className="text-muted mb-4" style={{ maxWidth: "850px", margin: "0 auto" }}>
            <strong>LabConnect</strong> is an online platform designed to help students at UW–Madison explore active research labs,
            connect with principal investigators, and find opportunities that match their academic goals and interests.
          </p>

          <h3 className="fw-bold mb-3" style={{color: "#DAA520"}}>Who is LabConnect for?</h3>
          <p className="text-muted mb-3" style={{ maxWidth: "850px", margin: "0 auto" }}>
            LabConnect is built for undergraduate and graduate students — whether you're pursuing an MS, PhD, or just getting started in research.
            It's especially helpful for those looking to:
          </p>

          <ul className="list-unstyled text-muted" style={{ maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
            <li>• Discover labs conducting research in your field of interest</li>
            <li>• Reach out directly to faculty through our built-in inquiry form</li>
            <li>• Save your favorite labs to revisit later</li>
            <li>• Filter opportunities based on eligibility and funding availability</li>
            <li>• Build your resume with hands-on experience in a real research setting</li>
            <li>• Explore new fields and interdisciplinary projects outside your major</li>
          </ul>

          <p className="mt-4 text-secondary" style={{ maxWidth: "800px", margin: "0 auto" }}>
            Whether you're exploring your first lab or planning your next academic step,
            <strong> LabConnect</strong> gives you the tools to take action and make meaningful research connections.
          </p>
        </div>
      </section>


    </>
  );
}




