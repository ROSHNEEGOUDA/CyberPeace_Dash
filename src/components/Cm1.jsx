import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";


const QuestionCard = ({ question, options, correctAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  return (
    <div className=" mx-auto mt-6 p-4 bg-blue-400 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">{question}</h2>
      <div>
        {options.map((option, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="radio"
              id={`option-${index}`}
              name="options"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
              className="mr-2"
            />
            <label htmlFor={`option-${index}`} className="text-gray-700">
              {option}
            </label>
          </div>
        ))}
      </div>
      {showAnswer && (
        <div className="mt-2">
          {selectedOption === correctAnswer ? (
            <p className="text-green-600 font-semibold">
              Correct Answer: {correctAnswer}
            </p>
          ) : (
            <p className="text-red-600 font-semibold">
              Incorrect Answer. Correct Answer: {correctAnswer}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

const Cm1 = () => {
  const [activeModule, setActiveModule] = useState("Introduction");

  const handleModuleClick = (moduleName) => {
    setActiveModule(moduleName);
  };

  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="lg:w-1/4 flex flex-col gap-4 items-center h-96   mt-12 mr-4 rounded-2xl border-gray-200 p-4">
        <div
          className={`bg-white border-blue-500 border-2 w-40 h-10 mb-6 mt-2  rounded-md justify-center items-center flex font-medium hover:bg-blue-500 hover:text-white hover:transition cursor-pointer transform transition-transform hover:scale-105`}
          onClick={() => handleModuleClick("Introduction")}
        >
          Introduction
        </div>
        <div
          className={`bg-white border-blue-500 border-2 w-40 h-10 mb-6  rounded-md justify-center items-center flex font-medium hover:bg-blue-500 hover:text-white hover:transition cursor-pointer transform transition-transform hover:scale-105`}
          onClick={() => handleModuleClick("Course plan")}
        >
          Course plan
        </div>
        <div
          className={`bg-white border-blue-500 border-2 w-40 h-10 mb-6  rounded-md justify-center items-center flex font-medium hover:bg-blue-500 hover:text-white hover:transition cursor-pointer transform transition-transform hover:scale-105`}
          onClick={() => handleModuleClick("History")}
        >
          History
        </div>
        <div
          className={`bg-white border-blue-500 border-2 w-40 h-10 mb-6  rounded-md justify-center items-center flex font-medium hover:bg-blue-500 hover:text-white hover:transition cursor-pointer transform transition-transform hover:scale-105`}
          onClick={() => handleModuleClick("Common attacks")}
        >
          Common attacks
        </div>
        <div
          className={`bg-white border-blue-500 border-2 w-40 h-10 mb-6  rounded-md justify-center items-center flex font-medium hover:bg-blue-500 hover:text-white hover:transition cursor-pointer transform transition-transform hover:scale-105`}
          onClick={() => handleModuleClick("Assessment")}
        >
          Assessment
        </div>
      </div>
      <div class=" w-0  bg-black"></div>
      <div className="lg:w-3/4 p-4">
        {activeModule === "Introduction" && (
          <div>
            <h2 className="text-[23px] font-semibold mb-4 text-blue-600 hover:text-blue-900 text-center">
              I. Overview of Cybersecurity
            </h2>
            <p className="text-black text-left font-[500] text-[17px]">
              What is Cybersecurity? Imagine your home is filled with your most
              important things: photos, keepsakes, financial documents, and
              things you use every day. You wouldn't leave your doors and
              windows wide open, would you? You'd want them locked to keep the
              wrong people out!
            </p>
            <br />
            <p className="text-black text-left font-[500] text-[17px]">
              In the digital world: Your data is your treasure: This includes
              your personal information, photos, banking details, basically
              everything stored on your computer or that you share online.
              Computers and networks are the doors and windows: Your computer,
              phone, and the internet connection are how you access this digital
              world, and also how others might try to get in. Cybersecurity is
              your protection: It's like the locks, the alarm system, and all
              the ways you keep your home (and valuable stuff) safe.
              Cybersecurity tools and practices protect your digital treasures
              from being stolen, damaged, or used by those who shouldn't have
              access.
            </p>
            <br />
            <p className="text-black text-left font-[500] text-[17px]">
              So, in real context… Cybersecurity is the practice of protecting
              systems, networks, and data from digital attacks. These
              cyberattacks are constantly evolving, but some of the most common
              goals include: Unauthorized access: When someone gains access to a
              system or data they shouldn't have. This is like someone breaking
              into your home. Theft: Stealing sensitive information, such as
              financial data, personal details, or company secrets. Damage:
              Intentionally harming or deleting data, or disrupting the
              operations of computer systems. Imagine a burglar smashing things
              in your home for no reason. Disruption: Preventing businesses,
              services, or even governments from functioning properly through
              attacks on their digital infrastructure.
            </p>
            <br />
            <p className="text-black text-left font-[500] text-[17px]">
              Key Points to Remember Cybersecurity is similar to protecting your
              physical belongings, but in the digital world. It utilizes a
              combination of technologies, processes, and good practices to
              defend against cyber threats. Due to our increasing reliance on
              technology, cybersecurity is more important than ever for
              individuals, businesses, and entire nations.
            </p><br />
            <h2 className="text-[23px] font-semibold mb-4 text-center  text-blue-600 hover:text-blue-900">
              II. Importance of Cybersecurity in the Digital Age
            </h2>
            <p className="text-black text-left font-[500] text-[17px]">
              Why Cybersecurity Matters? We live in a world where almost
              everything important to us has a digital version. We shop online,
              bank online, even connect with our friends and doctors through
              computers and the internet. Cybercriminals, just like burglars,
              want to exploit this for their own gain. Cybersecurity is the way
              we defend ourselves against: Identity theft: When someone steals
              your details (like your name and bank information) to pretend to
              be you. Viruses and malware: Nasty programs that can mess up your
              computer, steal your information, or even spy on you. Hackers:
              People who try to break into computer systems to steal information
              or cause trouble.
            </p>
          </div>
        )}
        {activeModule === "Course plan" && (
          <div>
            <p className="text-[23px] font-[600] text-purple-600 ">
              This is a video to demonstrate the various capabilities of the
              course plan and the integration of items inside it
            </p>
            <YouTube videoId="L1M7uxZ95t4" />
          </div>
        )}
        {activeModule === "History" && (
          <div className="text-gray-800">
            <h2 className="text-[25px] font-bold mb-4 text-center text-purple-700">
              3. History – How different technologies and new threats emerged
              and affected
            </h2>
            <p className="mb-4 text-black text-left font-[500] text-[17px]">
              The history of cybersecurity is a story of constant evolution. As
              new technologies emerged, offering groundbreaking possibilities
              for connection and progress, clever and malicious individuals
              inevitably found ways to exploit them. Early on, cyber threats
              were more like pranks, but they laid the groundwork for the
              organized cybercrime and potentially devastating attacks that
              plague our modern world. Let's take a journey through time and see
              how this battle between innovation and exploitation unfolded.
            </p>
            <div className="mb-6 ">
              <h3 className="text-lg font-semibold mb-2 text-blue-600 text-[20px]">
                The Early Days (1970s-1980s)
              </h3>
              <ul className="list-disc ml-6 text-[16px] font-normal">
                <li>The birth of the internet (ARPANET)</li>
                <li>
                  The Creeper Virus: A mostly harmless, but groundbreaking
                  experiment
                </li>
                <li>
                  Focus: Vulnerabilities of a new technology, early antivirus
                  concepts
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-600 text-[20px]">
                The Rise of Personal Computers & Hacking (1990s)
              </h3>
              <ul className="list-disc ml-6">
                <li>Home computers = more targets</li>
                <li>Early hacking groups, driven by curiosity and mischief</li>
                <li>
                  High-profile hacks begin to expose data security weaknesses
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-600 text-[20px]">
                Cybercrime Explodes (2000s)
              </h3>
              <ul className="list-disc ml-6">
                <li>
                  Internet shopping & banking make data theft highly profitable
                </li>
                <li>Malware gets sophisticated: worms, ransomware, etc.</li>
                <li>Attacks turn political, with state-sponsored hacking</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-600 text-[20px]">
                The Mobile and Cloud Era (2010s - Present)
              </h3>
              <ul className="list-disc ml-6">
                <li>Smartphones = a wealth of personal data</li>
                <li>
                  Cloud storage offers huge targets, attacks on services we rely
                  on
                </li>
                <li>
                  Social engineering attacks become common (phishing gets
                  clever)
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-600 text-[20px]">
                Recent Developments (2020s - Present)
              </h3>
              <ul className="list-disc ml-6">
                <li>
                  The Pandemic Shift:
                  <ul className="list-disc ml-6 ">
                    <li>Remote work = more attack points</li>
                    <li>Increased targeting of healthcare data</li>
                  </ul>
                </li>
                <li>
                  Ransomware as a Service:
                  <ul className="list-disc ml-6">
                    <li>
                      Sophisticated attack tools become easily accessible to
                      less-skilled criminals
                    </li>
                    <li>
                      Deepfakes & AI-Powered Threats: Manipulated videos and
                      audio create new avenues for misinformation and fraud
                    </li>
                    <li>
                      Supply Chain Attacks: Targeting a single company/software
                      can impact thousands downstream
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <p className="mb-4 text-black text-left font-[500] text-[17px]">
              New technologies continue to revolutionize how we live, work, and
              communicate. From artificial intelligence to the Internet of
              Things (IoT), each breakthrough brings both promise and new risks.
              Understanding the past patterns of cyberattacks helps us
              anticipate and protect against future threats. While cybersecurity
              will always be an ongoing challenge, learning about its history
              empowers us to build a more secure digital future, ensuring
              technology remains a force for good.
            </p>
          </div>
        )}
        {activeModule === "Common attacks" && (
          <div className="py-8">
            <h1 className="text-[35px] text-center font-bold mb-4 text-blue-600">
              Common Attacks
            </h1><br />
            <div>
              <h3 className="text-[20px] font-bold mb-2 text-purple-800">
                I. Malware, Phishing, and Social Engineering
              </h3>
              <p className="text-gray-600 mb-4 text-[20px]">
                <span className="font-bold">Malware</span>
                <br />
                Definition: Malware, short for malicious software, is any
                harmful program or code designed to damage, disrupt, or gain
                unauthorized access to computer systems. Malware is one of the
                most common cybersecurity threats, and it's constantly evolving
                to find new ways to attack.
              </p><br />
              <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">Types of Malware</span>
                <br />
                • Virus: A virus attaches itself to files or programs and
                requires human action to activate (like opening an infected
                attachment). It can then spread to other files on your computer.
                <br />
                • Worms: Worms exploit vulnerabilities in networks and can
                spread rapidly without any human interaction needed. This makes
                them particularly dangerous for networks of connected computers.
                <br />
                • Ransomware: This type of malware encrypts your files,
                rendering them inaccessible. The attackers demand a ransom
                payment, usually in cryptocurrency, in exchange for the
                decryption key.
                <br />
                • Spyware: Spyware operates stealthily, hiding in the background
                to monitor your online activity, log your keystrokes, and steal
                your personal information such as passwords and credit card
                data.
                <br />• Trojans: Trojans masquerade as legitimate software to
                trick you into downloading and installing them. Once on your
                system, they can create backdoors for attackers to gain access,
                steal data, or install other malware.
              </p>
              <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">How Malware Spreads</span>
                <br />
                • Email attachments: Opening infected attachments is a classic
                way malware spreads.
                <br />
                • Malicious links: Clicking on links in emails, social media
                posts, or even on compromised websites can redirect you to
                malicious sites or trigger automatic downloads.
                <br />
                • Drive-by downloads: Simply visiting a compromised website,
                even a normally reputable one, can trigger a drive-by download.
                Your system gets infected without you even clicking anything.
                <br />
                • Malvertising: Malicious advertisements, even on legitimate
                websites, can contain malware that infects your system when you
                interact with the ad or visit the linked site.
                <br />
                • Software vulnerabilities: Outdated software often contains
                security holes that malware can exploit to infiltrate a system.
                <br />• USB drives and other devices: Plugging in an infected
                device can spread malware to your computer.
              </p>
              <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">Phishing</span>
                <br />
                Definition: Phishing is a type of cyberattack where criminals
                try to trick you into giving up sensitive information like login
                credentials, credit card numbers, or personal details. They do
                this by impersonating legitimate entities, such as your bank, a
                streaming service, or even a government agency.
              </p>
              <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">Beyond Emails</span>
                <br />
                While email is a classic phishing delivery method, it's
                important to understand that phishing attacks can happen through
                various channels:
                <br />
                • Smishing (SMS Phishing): Phishing attacks delivered through
                text messages. These often pretend to be from your bank,
                delivery companies, or contain links to fake contests.
                <br />
                • Vishing (Voice Phishing): Criminals call you, impersonating a
                trusted organization, trying to extract information or get you
                to install malware through a link they send or a website they
                direct you to.
                <br />• Social Media Phishing: Fake profiles, direct messages,
                or ads on social media platforms can be used to phish. These
                might mimic a friend in need, a brand running a fake contest, or
                offer tech support scams.
              </p>
              <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">
                  Red Flags of Phishing Attempts
                </span>
                <br />
                • Spelling and grammar errors: While some phishing attempts are
                sophisticated, many contain typos or awkward phrasing.
                <br />
                • Strange URLs: Hover your mouse (don't click!) over links in
                emails or messages. The real destination may be different from
                what's displayed, or have slight misspellings of legitimate
                websites.
                <br />
                • Sense of urgency: Phishing often tries to scare you ("Your
                account is suspended!") or excite you ("You won a prize!") to
                make you act quickly without thinking critically.
                <br />• Requests for unusual information: A legitimate website
                or company will rarely ask you to provide your password or full
                Social Security number via email or text.
              </p>
              <p className="text-gray-600 mb-4 text-[19px]">
                Remember: Phishing preys on trust and urgency. Always slow down,
                verify independently (go to the official website yourself), and
                report suspicious attempts.
              </p>
              <h3 className="text-[20px] font-bold mb-2 text-purple-800">
                II. Password Attacks
              </h3><br />
              <p className="text-gray-600 mb-4 text-[19px]">
                Beyond Just Bad Passwords
                <br />
                • You might be doing everything right, using strong, complex
                passwords...but that's not enough protection if:
                <br />
                • You reuse the same password across different websites: If one
                of those sites suffers a data breach, your other accounts become
                easy targets.
                <br />• You use weak security questions: Many sites use things
                like your mother's maiden name or your first pet for password
                recovery. That info can often be found on social media or public
                records!
              </p>
              <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">Password Best Practices</span>
                <br />
                • Length beats complexity: A long passphrase (like a full
                sentence) is often easier to remember than a short, complex
                password, AND more difficult for hacking tools to crack.
                <br />• Unique Passwords Matter: Treat each online account like
                it has a separate key. Breaches happen, it minimizes the damage
                if one password doesn't unlock everything.
              </p>
              <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">Password Managers:</span>
                <br />
                • These tools securely generate and store complex, unique
                passwords for each of your accounts.
                <br />• You only need to remember one master password to access
                them all.
              </p>

              <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">
                  Activity: Password Strength Test
                </span>
                <br />
                Use this website:{" "}
                <a
                  href="https://www.security.org/how-secure-is-my-password/"
                  className="text-blue-600 hover:underline"
                >
                  https://howsecureismypassword.net/
                </a>
                <br />
                Instructions for Students:
                <br />
                Try a password you currently use. Does the site say it would be
                easy to crack?
                <br />
                Now try a longer passphrase (think silly sentence with odd
                capitalization). See how much more secure that is!
              </p>
              <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">Important Reminders</span>
                <br />
                • Change compromised passwords immediately: If you hear about a
                data breach at a site you use, change your password there (and
                on any site where you reused that password!)
                <br />• Two-Factor Authentication (2FA): When available, enable
                2FA on your accounts. This adds an extra layer of security,
                usually a code sent to your phone, along with your password.
              </p>
              <h3 className="text-[20px] font-bold mb-2 text-purple-800">
                III. Basic Defense Mechanisms
              </h3>
              <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">Layered Security</span>
                <br />
                • Think of your online security like your home. You wouldn't
                just rely on a door lock, you'd also have windows with secure
                latches, maybe an alarm system - each adds another layer.
                <br />
                • Cybersecurity is the same! Antivirus is important, but so are
                strong passwords, smart browsing habits, and keeping software
                updated.
                <br />• Why it matters: Even the best tools can sometimes fail.
                A layered approach gives you multiple lines of defense, making
                it much harder for a cybercriminal to succeed.
              </p>
              <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">
                  Beyond Software: Smart Online Habits
                </span>
                <br />
                • Treat links and attachments with suspicion: Before clicking,
                ask yourself: Do I trust the sender? Was I expecting this? Even
                if it seems to be from someone you know, their account could be
                hacked. If in doubt, don't click!
                <br />
                • Verify independently: Got a text from your bank about a login
                issue? Don't click the link in the text. Go to your bank's
                website directly or call a verified number from their official
                website.
                <br />
                • TMI on Social Media: The less you share about yourself online,
                the less ammunition scammers have to impersonate you or trick
                you.
                <br />
                • Avoid posting about when you're on vacation (empty house =
                target).
                <br />• Be careful with quizzes that ask for personal
                information (mother's maiden name, first pet, etc.). Those are
                often also security question answers!
              </p>
              <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">Key Takeaway:</span> Technology is a
                powerful tool in cybersecurity, but YOU are the most important
                line of defense. Developing good cybersecurity habits makes you
                a much harder target for attackers.
              </p>
            </div>
          </div>
        )}
        {activeModule === "Assessment" && (
          <div>
            <QuestionCard
              question="Q1. Which of the following is a key trend in the MOST RECENT developments in cybersecurity threats?"
              options={[
                "A. A return to simple viruses that cause minor disruptions",
                "B. Increased targeting of healthcare systems and data",
                "C. Hacking groups primarily motivated by political activism",
                "D. A decline in attacks focused on financial gain",
              ]}
              correctAnswer="B. Increased targeting of healthcare systems and data"
            />
            <QuestionCard
              question="Q2. The first viruses mainly spread through:"
              options={[
                "A. Phishing emails",
                "B. Floppy disks",
                "C. Text Messages",
                "D. Social media posts",
              ]}
              correctAnswer="B. Floppy disks"
            />
            <QuestionCard
              question="Q3. Which of the following is an example of the 'layered security' approach to cybersecurity?"
              options={[
                "A. Using strong passwords and enabling two-factor authentication on your accounts.",
                "B. Relying solely on your antivirus software for complete protection.",
                "C. Clicking on any link sent by a friend because you trust them.",
                "D. Sharing your birthday and hometown publicly on social media profiles.",
              ]}
              correctAnswer="A. Using strong passwords and enabling two-factor authentication on your accounts."
            />
            <QuestionCard
              question="Q4. You get a text that looks like it's from your bank. It says there's a problem with your account and you need to click a link to fix it. What should you do?"
              options={[
                "A. Click the link and log in right away.",
                "B. Ignore the text. It's probably fake.",
                "C. Go to your bank's website on your own or call their number.",
                "D. Text back with your account number to verify.",
              ]}
              correctAnswer="B. Ignore the text. It's probably fake."
              explanation="B. Correct: This is the safest way to check, without using any links from the suspicious message."
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cm1;
