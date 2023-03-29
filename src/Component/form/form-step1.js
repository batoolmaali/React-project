import axios from "axios";
import React, { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";
import { FaTrash } from "react-icons/fa"
import './form-data.css';
function FormStep1({ formData, setFormData, teamMembers, Error2, setError2 }) {

  const id = localStorage.getItem('userid');
  const [profileNum, setprofileNum] = useState("");
  const [projectTeam, setprojectTeam] = useState([]);
  const [teamsMembers1, setTeamsMembers] = useState([localStorage.getItem('userid')]);
  const [owner, setowner] = useState({});
  const [Error, setError] = useState(false);
  const [Error3, setError3] = useState(false);
  const [toggle, settoggle] = useState(false)

  const handleClick = () => {

    if (toggle) {
      setTeamsMembers([localStorage.getItem('userid')]);
      setprojectTeam([]);
      setError2(false)
    }

    settoggle(!toggle)
  }



  console.log("team", teamsMembers1);
  useEffect(() => {

    //------------------------userid ----------------------------------------
    const id = localStorage.getItem('userid');
    // console.log(id);

    axios.get(`https://arcace.ca/Arciace/api/users/getUserById?id=${id}`).then((response) => {
      // console.log(response.data.data);
      setowner(response.data.data)

    })
  })
  // ---------------------------add profile---------------------------------
  const handle = (e) => {

    console.log("team", teamsMembers1);
    console.log("proct-tem", projectTeam);

    axios.get(`https://arcace.ca/Arciace/api/users/getUserByProfileNo?profile_no=${profileNum}`).then((response) => {
      console.log(response.data);

      if (projectTeam.length < 3) {


        if (teamsMembers1.includes(response.data.data.id)) {
          alert("nooooo");
          setError3(true);
        } else {
          setprojectTeam(prevProjects => [...prevProjects, response.data.data])
          setTeamsMembers(prevMem => [...prevMem, response.data.data.id])
          setFormData({ ...formData, teamMembers: teamsMembers1 })

        }
      } else {
        setError(true)

      }
    })
  }
  // ---------------------------team name---------------------------------
  const handleTeam = (e) => {

    setFormData({ ...formData, team_name: e.target.value })


  }
  console.log(owner);
  return (
    <>

      <div className="main-form">
        {owner ?
          <>
            <div className="members">
              <div className="head-section">
                <h4>Members</h4>
              </div>

              {toggle ? (
                <div className="main-section" >
                  <div className="reg-inp">
                    <p>Registering On My Own</p>
                    <div className="toggle" onClick={handleClick} style={{ background: toggle ? " rgb(39,181,58,0.6)" : "" }}>
                      {toggle && toggle ? <div className="toggle-right"></div> :
                        <div className="toggle-left"></div>
                      }
                    </div>

                  </div>
                  <div style={{ visability: "heddin", height: "350px", }}>
                  </div>
                </div>
              ) :

                (
                  <>
                    <div className="main-section">
                      <div className="reg-inp">
                        <p>Registering On My Own</p>
                        <div className="toggle" onClick={handleClick}>
                          {toggle && toggle ? <div className="toggle-right"></div> :
                            <div className="toggle-left"></div>
                          }
                        </div>

                      </div>
                      <div className="add-team">

                        <label for="">Team name  <span style={{ color: "#E21E00", fontSize: "20px" }}>* </span></label>

                        <input
                          type="text" onChange={handleTeam}
                        />
                        {Error2 && Error2 ? <div style={{ marginTop: "5px", color: "#E21E00", fontWeight: "normal" }}> Filed requerd</div> : ""}

                        <label for="" >Add new members</label>
                        <div className="btn-add">

                          <input
                            type="text" onChange={(e) => setprofileNum(e.target.value)}
                          />
                          <button className="add-icon" onClick={handle}><FcPlus size={35} /></button>
                          {Error && Error ? <div style={{ marginTop: "5px", color: "#E21E00", padding: "6px", fontWeight: "normal" }}> Please  add 4 teams only</div> : ""}
                          {Error3 && Error3 ? <div style={{ marginTop: "5px", color: "#E21E00", padding: "6px", fontWeight: "normal" }}> team already exist</div> : ""}

                        </div>

                      </div>
                    </div>
                    <div className="note-section">
                      <p><span style={{ color: "#E21E00" }}>NOTE: </span>To add a team member, ask them for the account number at the top of the profile page, and then add number to the box provided.</p>
                    </div>

                  </>

                )}



            </div>

            <div className="project-team">
              <div className="head-section">
                <h4>Project team</h4>
              </div>
              <div className="main-section">
                <div className="reg-inp">
                  <p>Choose up to 4 team members:</p>
                </div>
                <div className="team-cards">
                  {/* for web owner*/}
                  <div className="project-team-card">
                    <div style={{ display: "flex", alignItem: "center", width: "25%" }}>
                      {owner.profile_pic && owner.profile_pic ?
                        <img width={40} className="card-image" src={owner.profile_pic
                        } /> :
                        <img width={40} className="card-image" src="https://th.bing.com/th/id/R.f6ac239e660006f1adbfe5be67c69ba2?rik=KLitQSKHfFtHmA&riu=http%3a%2f%2fvtc3pl.esy.es%2fimages1%2fprofile.png%3f1&ehk=X0FA75SYYsXX6ZHnjGUP%2bwv8wQtpmTPhtjaOpJd9N5o%3d&risl=&pid=ImgRaw&r=0" />
                      }

                      <p style={{ marginTop: "12px" }}> {owner.name}</p>
                    </div>

                    <p style={{ width: "20%" }}>{owner.types ? owner.types.type : ""}</p>
                    <p style={{ width: "25%" }}>profile_no {owner.profile_no}</p>
                    <FaTrash style={{ width: "10%" }} />
                  </div>
                  {/* /////////////////////////////////// */}

                  {/* for mobile owner */}
                  <div className="project-team-card2">

                    <div className="team2">



                      <FaTrash />
                    </div>
                    <div className="teamImg">
                      <img width={40} src={"https://th.bing.com/th/id/OIP.6MEn1wZkViQK-XUfpCl4ogHaHv?pid=ImgDet&rs=1"} className="card-image" />
                    </div>
                    <div className="team1">
                      <p > {owner.name}</p>
                      <p >Student</p>
                      <p > profile_no {owner.profile_no}</p>


                    </div>

                  </div>

                  {/* for web team*/}
                  {!toggle ? <>
                    <div>
                      {projectTeam.map((team) => {

                        return (

                          <div className="project-team-card">
                            <div style={{ display: "flex", alignItem: "center", width: "25%" }}>
                              <img width={40} src="https://th.bing.com/th/id/OIP.6MEn1wZkViQK-XUfpCl4ogHaHv?pid=ImgDet&rs=1" className="card-image" />

                              <p style={{ marginTop: "12px" }}> {team.name}</p>
                            </div>

                            <p style={{ width: "20%" }}>Student</p>
                            <p style={{ width: "25%" }}>profile_no {team.profile_no}</p>
                            <FaTrash style={{ width: "10%" }} />
                          </div>
                        )

                      })}
                    </div>

                  </>
                    : ""}
                  {/* for mobile team*/}
                  {!toggle ?
                    <>
                      {projectTeam.map((team) => {

                        return (

                          <div className="project-team-card2">
                            <div className="team2">



                              <FaTrash />
                            </div>
                            <div className="teamImg">
                              {team.profile_pic && team.profile_pic ?
                                <img src={team.profile_pic
                                } /> :
                                <img width={40} className="card-image" src="https://th.bing.com/th/id/R.f6ac239e660006f1adbfe5be67c69ba2?rik=KLitQSKHfFtHmA&riu=http%3a%2f%2fvtc3pl.esy.es%2fimages1%2fprofile.png%3f1&ehk=X0FA75SYYsXX6ZHnjGUP%2bwv8wQtpmTPhtjaOpJd9N5o%3d&risl=&pid=ImgRaw&r=0" />
                              }
                            </div>
                            <div className="team1">
                              <p > {team.name}</p>
                              <p >Student</p>
                              <p > profile_no {team.profile_no}</p>


                            </div>

                          </div>
                        )

                      })}
                    </>
                    : ""}
                </div>
              </div>
            </div>
          </>
          : ""
        }
      </div >

    </>
  );
}

export default FormStep1;
