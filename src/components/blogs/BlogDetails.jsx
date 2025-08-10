import React from "react";
import blogImage1 from '../../assets/images/videos/banner_0.png'
import blogImage2 from '../../assets/images/videos/banner_1.png'
import "./BlogDetails.css";

const BlogDetails = () => {
  return (
    <div className="blog-detail-wrapper">
      <div className="blog-main">
        {/* Left content */}
        <div className="blog-content">
          <h1>
            Chennai Bulls Make History, Crowned Inaugural GMR Rugby Premier League Champions!
          </h1>
          <p className="blog-date">30 June, 2025</p>

          <div className="blog-image">
            <img
              src={blogImage1} // replace with your image path
              alt="Chennai Bulls Champions"
            />
          </div>

          <div className="blog-text">
            <p>
              Mumbai, June 29, 2025 – In a thrilling finale, the Chennai Bulls etched their name
              in the annals of rugby history by becoming the first-ever champions of the GMR
              Rugby Premier League. The Bulls dominated the Delhi Redz with a resounding 41–0
              victory in the final match held at the Shahaji Raje Bhosale Sports Complex in Mumbai.
            </p>

            <p>
              Terry Kennedy was the star of the show, scoring two tries and providing two assists,
              earning him the player of the match title. His impressive performance was
              instrumental in the Bulls’ commanding win. Vafauese Maliko also made a significant
              contribution, opening the scoring with a try, which was converted by Filipe
              Sauturaga.
            </p>

            <p>
              The Bulls stormed into the final with momentum and wasted no time asserting their
              dominance. At halftime, they led 24–0, and their lead extended to 31–0 with four
              minutes to go. Even then, the Bulls didn’t let up, adding a couple more tries,
              including one by Mohammed Ashique, to seal a comprehensive win.
            </p>

            <p>
              This victory marks a historic moment for the Chennai Bulls and the GMR Rugby
              Premier League. The Bulls’ flawless performance capped off a successful debut season
              for the league, showcasing the growing popularity of rugby in India.
            </p>

            <h3>Match Highlights:</h3>
            <p>Score: Chennai Bulls 41, Delhi Redz 0</p>
            <p>Player of the Match: Terry Kennedy (2 tries, 2 assists)</p>
            <p>
              Top Performers: Vafauese Maliko, Filipe Sauturaga, and Mohammed Ashique
            </p>
            <p>
              Third Place: Hyderabad Heroes secured third place with a 17–12 win over Bengaluru
              Bravehearts
            </p>
            <p>
              The Chennai Bulls’ dominant performance in the final has set a high standard for
              future seasons of the GMR Rugby Premier League.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="blog-sidebar">
          <h3>More Latest Update</h3>


          <div className="sidebar-item firsr-item">
            <img src={blogImage2} alt="Update 1" />
            <div>
              <p>
                GMR Rugby Premier League Final Preview: Chennai Bulls to lock horns with Delhi
                Redz in high-stakes title clash
              </p>
              <span>28 Jun, 2025</span>
            </div>
          </div>

          <div className="sidebar-item">
            <img src={blogImage2} alt="Update 1" />
            <div>
              <p>
                GMR Rugby Premier League Final Preview: Chennai Bulls to lock horns with Delhi
                Redz in high-stakes title clash
              </p>
              <span>28 Jun, 2025</span>
            </div>
          </div>

          <div className="sidebar-item">
            <img src={blogImage2} alt="Update 1" />
            <div>
              <p>
                GMR Rugby Premier League Final Preview: Chennai Bulls to lock horns with Delhi
                Redz in high-stakes title clash
              </p>
              <span>28 Jun, 2025</span>
            </div>
          </div>

          <div className="sidebar-item">
            <img src={blogImage2} alt="Update 1" />
            <div>
              <p>
                GMR Rugby Premier League Final Preview: Chennai Bulls to lock horns with Delhi
                Redz in high-stakes title clash
              </p>
              <span>28 Jun, 2025</span>
            </div>
          </div>

        </aside>
      </div>
    </div>
  );
};

export default BlogDetails;
