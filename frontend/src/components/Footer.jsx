import React from "react";

const Footer = ({ completedTasksCount = 0, activeTasksCount = 0 }) => {
  return (
    <>
      {completedTasksCount + activeTasksCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTasksCount > 0 && (
              <>
                🎉 Alright! You are finish {completedTasksCount}
                {activeTasksCount > 0 &&
                  `,  ${activeTasksCount} task left. Do your best!`}
              </>
            )}

            {completedTasksCount === 0 && activeTasksCount > 0 && (
              <>Start to do {activeTasksCount} tasks!</>
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;