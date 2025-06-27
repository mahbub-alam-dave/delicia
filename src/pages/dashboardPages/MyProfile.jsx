import React, { useContext, useState } from "react";
import { ContextValues } from "../../contexts/ContextProvider";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { user, updateUserProfile, setLoading } = useContext(ContextValues);

  const [editUser, setEditUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };

  const handleUpdate = () => {
    updateUserProfile(editUser)
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Profile data updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false)
      })
      .catch((error) => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
    // setUser(editUser);
    document.getElementById("update-modal").close();
  };
  return (
    <div className="max-w-5xl w-full mx-auto space-y-6 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
      <h2 className="text-xl font-bold ">User Details</h2>
      <div className="bg-[var(--color-primary)] dark:bg-gray-900 shadow-xl rounded-xl p-8 flex flex-col items-center space-y-4">
        <img
          src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-[#ff3539] shadow"
        />
        <h2 className="text-2xl font-bold">
          {user?.displayName}
        </h2>
        <p className="text-gray-500">{user?.email}</p>
        <p className="text-sm text-gray-400">
          Member Since:{" "}
          {user?.metadata?.creationTime
            ? new Date(user.metadata.creationTime).toLocaleDateString()
            : "N/A"}
        </p>

        <button
          className="btn bg-[var(--color-secondary)] btn-wide mt-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]"
          onClick={() => {
            setEditUser(user);
            document.getElementById("update-modal").showModal();
          }}
        >
          <FaEdit className="mr-2" /> Update Profile
        </button>
      </div>

      {/* Modal */}
      <dialog id="update-modal" className="modal">
        <div className="modal-box space-y-4 bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]">
          <h3 className="font-bold text-lg text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            Update Profile Info
          </h3>
          <div className="space-y-2">
            <input
              type="text"
              name="displayName"
              value={editUser?.displayName}
              onChange={handleChange}
              className="input input-bordered w-full bg-transparent border-[var(--color-text-light)] dark:border-[var(--color-text-dark)]"
              placeholder="Name"
            />
            <input
              type="text"
              name="photoURL"
              value={editUser?.photoURL}
              onChange={handleChange}
              className="input input-bordered w-full bg-transparent border-[var(--color-text-light)] dark:border-[var(--color-text-dark)]"
              placeholder="Image URL"
            />
          </div>
          <div className="modal-action">
            <form method="dialog" className="space-x-2">
              <button className="btn">Cancel</button>
              <button
                type="button"
                onClick={handleUpdate}
                className="btn"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyProfile;
