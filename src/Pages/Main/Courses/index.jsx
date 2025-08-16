import { useState } from "react";
import { TableCardInfo } from "../../../Shared/TableCard";
import {
  AppMainLayoutCover,
  AppTableDataInformation,
  AppItemViewCover,
} from "../style";
import courseData from "../../../data/course.json";
import {
  CheckVerify,
  CheckPlus,
  Edit,
  Delete,
  CrossTick,
  Cross,
} from "../../../Shared/Icons";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Courses", path: "/" },
];

export const CoursesPage = () => {
  const [subj, setSubj] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [openContext, setOpenContext] = useState("Physics");

  const handleAccClick = (context) => setOpenContext(context);

  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
    if (action === "view") {
      setSubj(location);
      setIsOpen(true);
    }
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const courseTableData =
    courseData &&
    courseData.map((item) => ({
      id: item.courseId,
      image: item.image,
      name: item.courseName,
      credits: item.credits,
      status: item.credits,
      department: item.department,
      HOD: item.instructor,
      semester: item.semester,
    }));

  const renderCourseItem = (
    item,
    isSelected,
    toggleRow,
    onAction,
    enableStatus
  ) => (
    <li key={item.id}>
      <div className="app_checkbox_card">
        <label className="custom_checkbox">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => toggleRow(item.id)}
          />
          {isSelected ? (
            <span className="active_check">
              <CrossTick />
            </span>
          ) : (
            <span className="not_active_check">
              <CrossTick />
            </span>
          )}
        </label>
      </div>
      <div className="app_inside_left">
        <span>
          <img src={item.image} alt={item.name} />
        </span>
        <div className="app_inside_main_head">
          <button onClick={() => onAction("view", item)}>{item.name}</button>
          <p>{item.id}</p>
        </div>
      </div>
      <div className="app_inside_card">
        <p>
          <span>HOD:</span>
          {item.HOD}
        </p>
      </div>
      <div className="app_btn_items_card">
        <div className="app_status_card">
          <em className={item.status ? "app_status_actv" : "app_status_inactv"}>
            {item.status ? "Active" : "In-active"}
          </em>
        </div>
        <div className="app_btn_card">
          {enableStatus && (
            <button
              className={item.status ? "status" : "update_status"}
              onClick={() => onAction("status", item)}
            >
              {item.status ? <CheckVerify /> : <CheckPlus />}
            </button>
          )}
          <button className="edit" onClick={() => onAction("edit", item)}>
            <Edit />
          </button>
          <button className="delete" onClick={() => onAction("delete", item)}>
            <Delete />
          </button>
        </div>
      </div>
    </li>
  );

  return (
    <>
      <AppMainLayoutCover>
        <AppTableDataInformation>
          <TableCardInfo
            pageTitle={"Manage Courses"}
            pagePath={pagePaths}
            data={courseTableData}
            addTextItem={"Add New Course"}
            handleAddItems={handleAddItems}
            sortableColumns={["id", "name", "credits", "status"]}
            viewBtn={"name"}
            enableStatus={true}
            filterableColumns={["department", "semester", "status"]}
            onAction={handleBtnAction}
            renderItem={renderCourseItem}
          />
        </AppTableDataInformation>
      </AppMainLayoutCover>

      {isOpen && subj.name === "Mechanical Engineering" && (
        <AppItemViewCover>
          <div className="internalDetailsContent">
            <div
              className="app_close"
              onClick={() => {
                setSubj("");
                setIsOpen(false);
              }}
            >
              <Cross />
            </div>
            <h2>Course Details</h2>
            <div className="app_detailsSection">
              <h3>Mechanical Engineering</h3>
              <div className="app_details_course">
                <div className="details_elem_cover">
                  <div className="main_sub_wrap">
                    <div className="details_cover">
                      <div className="details_table">
                        <div className="details_row">
                          <span>Course Name</span>
                          <span>Durations</span>
                        </div>
                        <div className="details_row">
                          <p>HOT - Metallurgy with all test</p>
                          <p>60</p>
                        </div>
                        <div className="details_row">
                          <p>HOT - CNC Milling or VMC</p>
                          <p>60</p>
                        </div>
                        <div className="details_row">
                          <p>HOT - Mechanical Calibration</p>
                          <p>60</p>
                        </div>
                        <div className="details_row">
                          <p>HOT - CNC Turning</p>
                          <p>60</p>
                        </div>
                        <div className="details_row">
                          <p>HOT - 3D Scanner (Reverse Engineering)</p>
                          <p>40</p>
                        </div>
                        <div className="details_row">
                          <p>HOT - Tool Room Operations</p>
                          <p>120</p>
                        </div>
                        <div className="details_row">
                          <p>HOT - CAD</p>
                          <p>40</p>
                        </div>
                        <div className="details_row">
                          <p>Solid Works</p>
                          <p>60</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AppItemViewCover>
      )}

      {isOpen && subj.name === "Electrical and Electronics" && (
        <AppItemViewCover>
          <div className="internalDetailsContent">
            <div
              className="app_close"
              onClick={() => {
                setSubj("");
                setIsOpen(false);
              }}
            >
              <Cross />
            </div>
            <h2>Course Details</h2>
            <div className="app_detailsSection">
              <h3>Electrical and Electronics</h3>
              <div className="app_details_course">
                <div className="details_elem_cover">
                  <div className="main_sub_wrap">
                    <div className="details_cover">
                      <div className="details_table">
                        <div className="details_row">
                          <span>Course Name</span>
                          <span>Durations</span>
                        </div>
                        <div className="details_row">
                          <p>HOT - PLC SCADA Basic</p>
                          <p>60</p>
                        </div>
                        <div className="details_row">
                          <p>HOT - PLC SCADA professional</p>
                          <p>60</p>
                        </div>
                        <div className="details_row">
                          <p>Embed System</p>
                          <p>60</p>
                        </div>
                        <div className="details_row">
                          <p>Drive</p>
                          <p>30</p>
                        </div>
                        <div className="details_row">
                          <p>Basic of Electronic Design</p>
                          <p>30</p>
                        </div>
                        <div className="details_row">
                          <p>Internship Program</p>
                          <p>90</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AppItemViewCover>
      )}

      {isOpen && subj.name === "Commerce" && (
        <AppItemViewCover>
          <div className="internalDetailsContent">
            <div
              className="app_close"
              onClick={() => {
                setSubj("");
                setIsOpen(false);
              }}
            >
              <Cross />
            </div>
            <h2>Course Details</h2>
            <div className="app_detailsSection">
              <h3>Commerce</h3>
              <div className="app_details_course">
                <div className="details_elem_cover">
                  <div className="main_sub_wrap">
                    <div className="details_cover">
                      <div className="details_table">
                        <div className="details_row">
                          <span>Course Name</span>
                          <span>Durations</span>
                        </div>
                        <div className="details_row">
                          <p>Tally ERP 9 (Using GST)</p>
                          <p>60</p>
                        </div>
                        <div className="details_row">
                          <p>Internship Program</p>
                          <p>90</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AppItemViewCover>
      )}

      {isOpen && subj.name === "IT / Computer Science" && (
        <AppItemViewCover>
          <div className="internalDetailsContent">
            <div
              className="app_close"
              onClick={() => {
                setSubj("");
                setIsOpen(false);
              }}
            >
              <Cross />
            </div>
            <h2>Course Details</h2>
            <div className="app_detailsSection">
              <h3>IT / Computer Science</h3>
              <div className="app_details_course">
                <div className="details_elem_cover">
                  <div className="main_sub_wrap">
                    <div className="details_cover">
                      <div className="details_table">
                        <div className="details_row">
                          <span>Course Name</span>
                          <span>Durations</span>
                        </div>
                        <div className="details_row">
                          <p>React Js</p>
                          <p>50</p>
                        </div>
                        <div className="details_row">
                          <p>Node Js</p>
                          <p>50</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AppItemViewCover>
      )}
    </>
  );
};
