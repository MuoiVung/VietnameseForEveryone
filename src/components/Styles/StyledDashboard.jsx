import styled from "styled-components";
import bg from "../../assets/img/dashboard-bg.webp";

const StyledDashboard = styled.section`
  ul {
    list-style: none;
  }
  .container {
    margin-top: 2rem;
    .db-section {
      margin-bottom: 2rem;
    }
    .section-title {
      margin-bottom: 1rem;
      font-size: 1rem;
      font-family: var(--font-heading);
      color: var(--color-primary);
      font-weight: 400;
      text-transform: capitalize;
    }
    .courses {
      display: flex;
      justify-content: space-between;
      .left {
        flex: 1;
        .continue-courses {
          padding-right: 8px;
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

        .continue-courses::-webkit-scrollbar {
          display: none;
          width: 6px;
        }

        .continue-courses ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        .continue-courses::-webkit-scrollbar-thumb {
          background: var(--color-primary);
        }

        padding-right: 1rem;
      }

      .left:hover .continue-courses::-webkit-scrollbar {
        display: block;
      }

      .right {
        padding-left: 1rem;
        flex: 1;
        .recommend-course {
          height: 22.5rem;
          background: black url(${bg}) no-repeat right;
          background-size: cover;
          color: #b0b0b0;
          .content {
            width: 60%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .title {
              font-family: var(--font-heading);
              font-size: 1.5rem;
              font-weight: 400;
              line-height: 1.4;
            }
            .text {
              flex: 1;
              margin-top: 2rem;
              line-height: 1.4;
            }
            .button {
            }
          }
        }
      }
    }
    .achievements {
      ul {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1rem;
      }
    }
    .tracking {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      .item {
        height: 20rem;
      }
      .skills {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;
      }
      .paths {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        img {
          filter: hue-rotate(145deg) contrast(0.9) brightness(1);
        }
      }
    }
  }
`;
export default StyledDashboard;
