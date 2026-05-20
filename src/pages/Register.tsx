import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  useForm,
} from "react-hook-form";

import toast from "react-hot-toast";

interface FormData {
  name: string;

  email: string;

  password: string;

  confirmPassword: string;
}

export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const {
    register,

    handleSubmit,

    watch,

    formState: { errors },
  } = useForm<FormData>();

  const password = watch(
    "password"
  );

  const onSubmit = (
    data: FormData
  ) => {
    setLoading(true);

    setTimeout(() => {
      toast.success(
        `Welcome ${data.name}`
      );

      navigate("/login");

      setLoading(false);
    }, 1400);
  };

  return (
    <div
      style={{
        minHeight: "100vh",

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        padding: "30px",
      }}
    >
      <div
        className="premium-card fade-up"
        style={{
          width: "100%",
          maxWidth: "520px",

          padding: "40px",

          borderRadius: "32px",

          background:
            "rgba(255,255,255,0.05)",

          border:
            "1px solid rgba(255,255,255,0.08)",

          backdropFilter:
            "blur(20px)",
        }}
      >
        <h1
          style={{
            fontSize: "52px",

            fontWeight: "bold",

            marginBottom: "10px",

            lineHeight: 1,
          }}
        >
          Create Account
        </h1>

        <p
          style={{
            color: "#9ca3af",

            marginBottom: "35px",
          }}
        >
          Join Silver Bank today
        </p>

        <form
          onSubmit={handleSubmit(
            onSubmit
          )}
        >
          {/* NAME */}
          <div
            style={{
              marginBottom: "20px",
            }}
          >
            <p
              style={{
                marginBottom: "10px",
              }}
            >
              Full Name
            </p>

            <input
              placeholder="Enter name"
              {...register(
                "name",
                {
                  required:
                    "Name is required",
                }
              )}
              style={{
                width: "100%",

                padding: "18px",

                borderRadius: "18px",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                background:
                  "rgba(255,255,255,0.05)",

                color: "white",

                outline: "none",

                fontSize: "16px",
              }}
            />

            {errors.name && (
              <p
                style={{
                  color: "#ef4444",

                  marginTop: "8px",

                  fontSize: "14px",
                }}
              >
                {
                  errors.name
                    .message
                }
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div
            style={{
              marginBottom: "20px",
            }}
          >
            <p
              style={{
                marginBottom: "10px",
              }}
            >
              Email
            </p>

            <input
              placeholder="Enter email"
              {...register(
                "email",
                {
                  required:
                    "Email is required",
                }
              )}
              style={{
                width: "100%",

                padding: "18px",

                borderRadius: "18px",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                background:
                  "rgba(255,255,255,0.05)",

                color: "white",

                outline: "none",

                fontSize: "16px",
              }}
            />

            {errors.email && (
              <p
                style={{
                  color: "#ef4444",

                  marginTop: "8px",

                  fontSize: "14px",
                }}
              >
                {
                  errors.email
                    .message
                }
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div
            style={{
              marginBottom: "20px",
            }}
          >
            <p
              style={{
                marginBottom: "10px",
              }}
            >
              Password
            </p>

            <input
              type="password"
              placeholder="Enter password"
              {...register(
                "password",
                {
                  required:
                    "Password is required",

                  minLength: {
                    value: 6,

                    message:
                      "Minimum 6 characters",
                  },
                }
              )}
              style={{
                width: "100%",

                padding: "18px",

                borderRadius: "18px",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                background:
                  "rgba(255,255,255,0.05)",

                color: "white",

                outline: "none",

                fontSize: "16px",
              }}
            />

            {errors.password && (
              <p
                style={{
                  color: "#ef4444",

                  marginTop: "8px",

                  fontSize: "14px",
                }}
              >
                {
                  errors.password
                    .message
                }
              </p>
            )}
          </div>

          {/* CONFIRM PASSWORD */}
          <div
            style={{
              marginBottom: "30px",
            }}
          >
            <p
              style={{
                marginBottom: "10px",
              }}
            >
              Confirm Password
            </p>

            <input
              type="password"
              placeholder="Confirm password"
              {...register(
                "confirmPassword",
                {
                  required:
                    "Please confirm password",

                  validate:
                    (
                      value
                    ) =>
                      value ===
                        password ||
                      "Passwords do not match",
                }
              )}
              style={{
                width: "100%",

                padding: "18px",

                borderRadius: "18px",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                background:
                  "rgba(255,255,255,0.05)",

                color: "white",

                outline: "none",

                fontSize: "16px",
              }}
            />

            {errors.confirmPassword && (
              <p
                style={{
                  color: "#ef4444",

                  marginTop: "8px",

                  fontSize: "14px",
                }}
              >
                {
                  errors
                    .confirmPassword
                    .message
                }
              </p>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="premium-button"
            style={{
              width: "100%",

              border: "none",

              padding: "20px",

              borderRadius: "20px",

              background:
                "linear-gradient(135deg,#7c3aed,#ff2fb9)",

              color: "white",

              fontWeight: "bold",

              fontSize: "18px",

              cursor: "pointer",

              opacity: loading
                ? 0.7
                : 1,
            }}
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}