import styled from "styled-components";
import emergencyImg from "../../assets/img/emergency.avif";

const StyledDashboard = styled.section`
  .container {
    margin-top: 2rem;
    .section-title {
      margin-bottom: 1rem;
      font-size: 1rem;
      font-family: var(--font-heading);
      color: var(--color-primary);
      font-weight: 400;
    }
    .courses {
      display: flex;
      justify-content: space-between;
      .left {
        flex: 1;
        .continue-courses {
          list-style: none;
          height: 22.5rem;
          overflow-y: scroll;
          .card {
            margin-bottom: 0.5rem;
            padding: 0 2rem 0 0;
            a {
              text-decoration: none;
              display: block;
            }
            a:hover .name {
              color: var(--color-second) !important;
            }
            .course {
              display: flex;
              justify-content: space-between;
              align-items: center;
              img {
                display: block;
                width: 9rem;
                height: 7rem;
                border-top-left-radius: 16px;
                border-bottom-left-radius: 16px;
                object-fit: cover;
              }
              .content {
                flex: 1;
                padding-left: 2rem;
                .title {
                  margin-bottom: 1rem;
                  display: flex;
                  justify-content: space-between;
                  .name {
                    color: var(--color-primary);
                  }
                  .percentage {
                    color: var(--color-light-black);
                  }
                }
              }
            }
          }
        }
        padding-right: 1rem;
      }
      .right {
        padding-left: 1rem;
        flex: 1;
        .recommend-course {
          height: 22.5rem;
          background: url(${emergencyImg}) no-repeat right;
          background-size: cover;
        }
      }
    }
  }
`;
export default StyledDashboard;
