import React from 'react';


const CalendarLink = "./invite.ics"
export class DownloadButton extends React.Component {
  render() {
    return (
    <div>
      <a target="_blank" href={ CalendarLink } title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-purple-300 rounded-full lg:mt-16 hover:bg-red-300 focus:bg-purple-400" role="button" download>
        Download Release Invite
        <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </a>
    </div>
    )
  }
}