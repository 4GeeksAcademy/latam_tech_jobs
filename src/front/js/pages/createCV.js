import React from "react";
import { Image, Col, Container, Row } from "react-bootstrap";
import createCV from "../../img/createcv.png";
import canvaLogo from "../../img/canva.png";
import newLogo from "../../img/newlogo-nav.png";

const CreateCV = () => {
  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col md={6} className="text-center">
            <img
              src={createCV}
              alt="resumePage"
              style={{ maxWidth: "600px", height: "400px" }}
            />
          </Col>
          <Col md={6}>
            <h1 className="mt-5">
              Creating a Perfect CV for Tech Jobs: Best Practices, Tips, and
              Tricks
            </h1>
            <p>
              In today's competitive job market, a well-crafted CV (Curriculum
              Vitae) is your ticket to standing out and landing your dream tech
              job. Whether you're an experienced software engineer, a UI/UX
              designer, or just starting your tech career, your CV plays a
              critical role in making a lasting impression on potential
              employers. In this comprehensive guide, we'll explore the best
              practices, tips, and tricks to help you create the perfect CV for
              tech jobs. We'll also provide references to useful sites and
              resources to enhance your CV-building process.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row>
          <Col md={12}>
            <h2>Table of Contents:</h2>
            <ol>
              <li>
                <a href="#understanding-tech-industry"></a>
                <a href="#structuring-tech-cv">Structuring Your Tech CV</a>
              </li>
              <li>
                <a href="#best-practices-section">
                  Best Practices for Each Section
                </a>
              </li>
              <li>
                <a href="#tips-and-tricks-section">Tips and Tricks</a>
              </li>
              <li>
                <a href="#useful-sites-section">
                  Useful Sites for Creating Your CV
                </a>
              </li>
              <li>
                <a href="#references-and-resources">References and Resources</a>
              </li>
            </ol>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 id="understanding-tech-industry">
              1. Understanding the Tech Industry
            </h2>
            <p>
              Before diving into the nitty-gritty of CV writing, it's essential
              to grasp the tech industry's dynamics. The tech landscape is
              ever-evolving, with a wide range of roles, from software
              developers and data scientists to UX/UI designers and
              cybersecurity experts. Each role has its unique requirements and
              expectations, which should reflect in your CV.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 id="structuring-tech-cv">2. Structuring Your Tech CV</h2>
            <p>
              A well-structured CV is easier for recruiters to navigate. Here's
              a breakdown of the key sections to include:
            </p>
            <ul>
              <li>
                <strong>Contact Information:</strong> Include your name, phone
                number, email address, and LinkedIn profile (if applicable).
              </li>
              <li>
                <strong>Professional Summary/Objective:</strong> Craft a concise
                statement summarizing your career goals and what you bring to
                the table.
              </li>
              <li>
                <strong>Skills:</strong> List your technical skills, programming
                languages, tools, and any soft skills that are relevant to the
                role.
              </li>
              <li>
                <strong>Work Experience:</strong> Detail your previous job
                positions, highlighting your responsibilities, achievements, and
                contributions.
              </li>
              <li>
                <strong>Education:</strong> Mention your educational background,
                including degrees, institutions, and graduation dates.
              </li>
              <li>
                <strong>Projects and Portfolio:</strong> Showcase your best
                work, emphasizing your role, the technologies used, and the
                impact of your projects.
              </li>
              <li>
                <strong>Certifications:</strong> Highlight any relevant
                certifications or training programs you've completed.
              </li>
              <li>
                <strong>Awards and Achievements:</strong> Recognize any
                accolades or honors you've received in your career.
              </li>
              <li>
                <strong>Additional Sections:</strong> Depending on your career
                stage and goals, you may include sections like publications,
                volunteer work, or hobbies.
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 id="best-practices-section">
              3. Best Practices for Each Section
            </h2>
            <p>
              Each section of your CV should serve a specific purpose. Here are
              some best practices to follow:
            </p>
            <ul>
              <li>
                <strong>Contact Information:</strong> Ensure it's up to date and
                professional. Avoid using overly informal email addresses like
                honeybunny@hotmail.com.
              </li>
              <li>
                <strong>Professional Summary/Objective:</strong> Tailor it to
                the job you're applying for, emphasizing what makes you a great
                fit for the role.
              </li>
              <li>
                <strong>Skills:</strong> Group your skills into categories, such
                as programming languages, software, and soft skills. Highlight
                your proficiency level.
              </li>
              <li>
                <strong>Work Experience:</strong> Use bullet points to describe
                your accomplishments, focusing on quantifiable results and
                achievements.
              </li>
              <li>
                <strong>Education:</strong> Include your GPA if you're a recent
                graduate. Include relevant coursework or projects, especially if
                they demonstrate your skills.
              </li>
              <li>
                <strong>Projects and Portfolio:</strong> Include links to your
                GitHub or portfolio website. Provide context for each project,
                explaining the problem you solved and the impact of your work.
              </li>
              <li>
                <strong>Certifications:</strong> Include certifications that are
                relevant to the role. Specify the certification name, issuing
                body, and date earned.
              </li>
              <li>
                <strong>Awards and Achievements:</strong> Briefly describe each
                award and its significance.
              </li>
              <li>
                <strong>Additional Sections:</strong> Include sections that
                highlight your unique skills and experiences. For example, if
                you are applying for a front-end developer role, you may include
                a section on your design skills.
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 id="tips-and-tricks-section">4. Tips and Tricks</h2>
            <p>
              To make your CV stand out, consider the following tips and tricks:
            </p>
            <ul>
              <li>
                <strong>Keywords:</strong> Tailor your CV for applicant tracking
                ystems (ATS) by incorporating keywords from the job description.
              </li>
              <li>
                <strong>Quantify Your Achievements:</strong> Use numbers and
                metrics to illustrate your impact. For example, "increased
                website traffic by 30%."
              </li>
              <li>
                <strong>Highlight Relevant Technologies:</strong> Mention
                specific programming languages, tools, and software you're
                proficient in.
              </li>
              <li>
                <strong>Showcase Problem-Solving Skills: :</strong> Describe how
                you've tackled challenges and solved complex problems in your
                previous roles.
              </li>
              <li>
                <strong>Customize for Each Application:</strong> Adjust your CV
                to match the specific job you're applying for, emphasizing
                relevant skills and experiences.
              </li>
              <li>
                <strong>Keep It Concise:</strong> Limit your CV to one or two
                pages. Use bullet points and short sentences to keep it concise.
              </li>
              <li>
                <strong>Proofread:</strong> Check for typos and grammatical
                errors. Ask a friend or colleague to review your CV.
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 id="useful-sites-section">
              5. Useful Sites for Creating Your CV
            </h2>
            <p>
              Creating a visually appealing and professional CV is crucial. Here
              are some online resources and tools to assist you:
            </p>
            <ul>
              <li>
                <strong>Canva:</strong> Canva offers a wide range of CV
                templates, including those tailored for tech jobs.
              </li>
              <li>
                <strong>VisualCV:</strong> VisualCV provides a variety of
                templates and designs to help you create a standout CV.
              </li>
              <li>
                <strong>CV Maker:</strong> CV Maker offers a simple and
                user-friendly interface for creating your CV.
              </li>
              <li>
                <strong>CV Engineer:</strong> CV Engineer provides a free CV
                builder with a clean and professional design.
              </li>
            </ul>
            {/* ... Include useful sites and tools ... */}
          </Col>
          {/* add another col for images with links */}
          <Col md={6} className="text-center">
            {/* create link to canva */}
            <a href="https://www.canva.com/">
              <img
                src={canvaLogo}
                alt="canva logo"
                style={{ maxWidth: "600px", height: "300px" }}
                className="justify-content-center align-items-center mt-5"
              />
            </a>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 id="references-and-resources">6. References and Resources</h2>
            <p>
              To further enhance your CV-building process, consider exploring
              these references and resources:
            </p>
            <ul>
              <li>
                <strong>Books and Guides on CV Writing:</strong>Books like "The
                Resume Writing Guide" by Lisa McGrimmon and "Resume Magic" by
                Susan Whitcomb offer in-depth guidance.
              </li>
              <li>
                <strong>Online Courses and Tutorials: :</strong> Platforms like
                Coursera, LinkedIn Learning, and Udemy offer courses on CV
                writing and job search strategies.
              </li>
            </ul>
          </Col>
          <Row>
            <Col md={12} className="text-start">
              <p>
                In conclusion, crafting a perfect CV for tech jobs requires a
                thoughtful approach, attention to detail, and a clear
                understanding of industry expectations. By following the best
                practices, tips, and tricks outlined in this guide and utilizing
                the provided references and resources, you'll be well-equipped
                to create a CV that grabs the attention of tech employers and
                opens the doors to exciting career opportunities. Good luck in
                your tech job search!
              </p>
            </Col>
          </Row>
        </Row>
        
      </Container>
      <Container className="my-5">
        <Row>
          <Col md={12} className="text-end">
            <Image src={newLogo} alt="newLogo" style={{ maxWidth: "300px", height: "150px" }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateCV;
