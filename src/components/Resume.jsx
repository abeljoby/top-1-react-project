import "./Resume.css";

function Resume({ resumeData }) {
  return (
    <div className="resume">
      <table>
        <thead>
          <tr>
            <th colSpan="3" className="resume-header">Resume</th>
          </tr>
        </thead>
        <tbody>
          {/* General Info */}
          <tr>
            <td className="resume-section" colSpan="3">
              <em>General Information</em>
            </td>
          </tr>
          <tr>
            <td className="label">Name</td>
            <td colSpan="2">{resumeData.Name}</td>
          </tr>
          <tr>
            <td className="label">Email</td>
            <td colSpan="2">{resumeData.Email}</td>
          </tr>
          <tr>
            <td className="label">Mobile</td>
            <td colSpan="2">{resumeData.Mobile}</td>
          </tr>

          {/* Education */}
          <tr>
            <td className="resume-section" colSpan="3">
              <em>Education</em>
            </td>
          </tr>
          {resumeData.Education.map((ed, index) => (
            <tr key={index}>
              <td className="label">{ed.Name}</td>
              <td>{ed.Degree}</td>
              <td>{ed.Year}</td>
            </tr>
          ))}

          {/* Work Experience */}
          <tr>
            <td className="resume-section" colSpan="3">
              <em>Work Experience</em>
            </td>
          </tr>
          {resumeData.Experience.map((wk, index) => (
            <tr key={index}>
              <td className="label">{wk.Name}</td>
              <td colSpan="2">{wk.Start} - {wk.End}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Resume;