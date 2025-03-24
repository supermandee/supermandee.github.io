"use client";

import React, { useState } from 'react';

const Calendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [notes, setNotes] = useState({});
  const [colors, setColors] = useState({});
  const [selectionStart, setSelectionStart] = useState(null);
  const [selectionEnd, setSelectionEnd] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [multiSelectMode, setMultiSelectMode] = useState(false);
  const [tempNote, setTempNote] = useState('');
  const [selectedColor, setSelectedColor] = useState('rgba(243, 232, 255, 0.5)'); // Light purple from screenshot
  
  // Available color options - using the purple from screenshot as default
  const colorOptions = [
    { name: 'Purple', value: 'rgba(243, 232, 255, 0.5)' }, // Light purple like in screenshot
    { name: 'Yellow', value: '#fff8e1' },
    { name: 'Green', value: '#e8f5e9' },
    { name: 'Blue', value: '#e3f2fd' },
    { name: 'Red', value: '#ffebee' },
    { name: 'Orange', value: '#fff3e0' },
  ];
  
  // Generate all days for the year in a continuous grid
  const generateCalendarDays = (year) => {
    const days = [];
    for (let month = 0; month < 12; month++) {
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      
      for (let day = 1; day <= daysInMonth; day++) {
        days.push({
          date: new Date(year, month, day),
          day,
          month,
          noteKey: `${year}-${month}-${day}`,
          timestamp: new Date(year, month, day).getTime()
        });
      }
    }
    return days;
  };
  
  const days = generateCalendarDays(year);

  // Start the selection range
  const handleDayClick = (noteKey, timestamp) => {
    if (!multiSelectMode || !isEditMode) return;
    
    if (!selectionStart) {
      // Start new selection
      setSelectionStart({ noteKey, timestamp });
      setSelectionEnd({ noteKey, timestamp });
    } else {
      // Complete the selection
      setSelectionEnd({ noteKey, timestamp });
    }
  };
  
  // Get all days in the current selection range
  const getSelectedDays = () => {
    if (!selectionStart || !selectionEnd) return [];
    
    // Ensure start is before end chronologically
    const startTime = Math.min(selectionStart.timestamp, selectionEnd.timestamp);
    const endTime = Math.max(selectionStart.timestamp, selectionEnd.timestamp);
    
    return days.filter(day => 
      day.timestamp >= startTime && day.timestamp <= endTime
    ).map(day => day.noteKey);
  };
  
  const selectedDays = getSelectedDays();
  
  // Check if a day is within the current selection
  const isDaySelected = (timestamp) => {
    if (!selectionStart || !selectionEnd) return false;
    
    const startTime = Math.min(selectionStart.timestamp, selectionEnd.timestamp);
    const endTime = Math.max(selectionStart.timestamp, selectionEnd.timestamp);
    
    return timestamp >= startTime && timestamp <= endTime;
  };
  
  // Apply note and color to all selected days
  const applyToSelectedDays = () => {
    if (selectedDays.length === 0) return;
    
    // Create a group ID for this selection
    const groupId = `group-${Date.now()}`;
    
    const newNotes = { ...notes };
    const newColors = { ...colors };
    
    selectedDays.forEach(noteKey => {
      newNotes[noteKey] = {
        text: tempNote,
        groupId: selectedDays.length > 1 ? groupId : null // Only use groupId for multiple days
      };
      newColors[noteKey] = selectedColor;
    });
    
    setNotes(newNotes);
    setColors(newColors);
    exitMultiSelectMode();
  };
  
  // Exit multi-select mode
  const exitMultiSelectMode = () => {
    setMultiSelectMode(false);
    setSelectionStart(null);
    setSelectionEnd(null);
    setTempNote('');
  };
  
  // Toggle between edit and view modes for the entire calendar
  const toggleEditMode = () => {
    if (multiSelectMode) {
      exitMultiSelectMode();
    }
    setIsEditMode(!isEditMode);
  };
  
  // Get month name
  const getMonthName = (monthIndex) => {
    return new Date(0, monthIndex).toLocaleString('default', { month: 'long' });
  };
  
  // Navigate to previous or next year
  const changeYear = (delta) => {
    setYear(prevYear => prevYear + delta);
  };
  
  // Determine if the background should be colored (for special days, like indicated in screenshot)
  const isHighlightedBackground = (day) => {
    if (!day) return false;
    
    // In this example, we'll highlight days based on notes or specific ranges
    // You can customize this based on your requirements
    return notes[day.noteKey] || colors[day.noteKey] ? true : false;
  };
  
  // Get consecutive run of days with the same groupId
  const getGroupedDaysRun = (week, startIdx) => {
    if (!week[startIdx] || !notes[week[startIdx].noteKey]) return null;
    
    const startGroupId = notes[week[startIdx].noteKey].groupId;
    if (!startGroupId) return null;
    
    let endIdx = startIdx;
    
    // Find the last consecutive day with the same groupId
    for (let i = startIdx + 1; i < week.length; i++) {
      if (week[i] && 
          notes[week[i].noteKey] && 
          notes[week[i].noteKey].groupId === startGroupId) {
        endIdx = i;
      } else {
        break;
      }
    }
    
    // Allow display of spans of any length
    return {
      startIdx,
      endIdx,
      length: endIdx - startIdx + 1,
      groupId: startGroupId,
      noteText: notes[week[startIdx].noteKey].text
    };
  };
  
  // Format the saved note for display
  const formatSavedNote = (note) => {
    if (!note) return null;
    
    let text = typeof note === 'object' ? note.text : note;
    
    if (!text) return null;
    
    // Split by new lines and render them properly
    return text.split('\n').map((line, i) => (
      <p key={i} className="text-xs mb-0 my-0 text-neutral-700 dark:text-neutral-300 leading-tight truncate">{line || '\u00A0'}</p>
    ));
  };

  // Determine which border sides should be highlighted for a selected day
  const getSelectionBorders = (dayInfo) => {
    if (!isDaySelected(dayInfo.timestamp)) return '';
    
    const dayBefore = new Date(dayInfo.timestamp - 86400000); // Previous day
    const dayAfter = new Date(dayInfo.timestamp + 86400000); // Next day
    
    const isDayBeforeSelected = isDaySelected(dayBefore.getTime());
    const isDayAfterSelected = isDaySelected(dayAfter.getTime());
    
    // Is this the first day of a week? (Sunday)
    const isSunday = dayInfo.date.getDay() === 0;
    // Is this the last day of a week? (Saturday)
    const isSaturday = dayInfo.date.getDay() === 6;
    
    let classes = 'relative ';
    
    // Left border (only if not connected to previous day or is Sunday)
    if (!isDayBeforeSelected || isSunday) {
      classes += 'border-l border-l-blue-300 ';
    }
    
    // Right border (only if not connected to next day or is Saturday)
    if (!isDayAfterSelected || isSaturday) {
      classes += 'border-r border-r-blue-300 ';
    }
    
    // Always add top and bottom borders
    classes += 'border-t border-b border-t-blue-300 border-b-blue-300 ';
    
    return classes;
  };

  // Organize days into weeks for the grid layout
  const organizeIntoWeeks = () => {
    const weeks = [];
    let currentWeek = Array(7).fill(null);
    
    // Fill in empty cells before the first day of the year
    let dayIndex = 0;
    for (let i = 0; i < days[0].date.getDay(); i++) {
      currentWeek[i] = null;
    }
    
    // Fill in all days of the year
    for (let i = days[0].date.getDay(); i < 7; i++) {
      currentWeek[i] = days[dayIndex];
      dayIndex++;
    }
    weeks.push([...currentWeek]);
    
    // Continue with remaining weeks
    while (dayIndex < days.length) {
      currentWeek = Array(7).fill(null);
      for (let i = 0; i < 7 && dayIndex < days.length; i++) {
        currentWeek[i] = days[dayIndex];
        dayIndex++;
      }
      weeks.push([...currentWeek]);
    }
    
    return weeks;
  };
  
  const weeks = organizeIntoWeeks();
  
  // Create a mapping of row indices to month names for the side labels
  const getMonthLabels = () => {
    const monthLabels = {};
    let currentMonth = null;
    
    weeks.forEach((week, weekIndex) => {
      // Find the first non-null day in the week
      const firstValidDay = week.find(day => day !== null);
      if (firstValidDay && firstValidDay.month !== currentMonth) {
        currentMonth = firstValidDay.month;
        monthLabels[weekIndex] = getMonthName(currentMonth);
      }
    });
    
    return monthLabels;
  };
  
  const monthLabels = getMonthLabels();

  return (
    <div 
  style={{
    width: "800px",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: "10",
    padding: "0 8px",
    marginBottom: "80px", // Add space below the calendar
  }}
  className="relative pb-[1000px]" // Force the container to take up space in document flow
>
      {/* Top navigation and control area */}
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <div className="flex space-x-2">
          <button 
            onClick={() => changeYear(-1)} 
            className="px-3 py-1 text-sm bg-white text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 rounded border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700"
          >
            Previous Year
          </button>
          <button 
            onClick={() => changeYear(1)} 
            className="px-3 py-1 text-sm bg-white text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 rounded border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700"
          >
            Next Year
          </button>
        </div>
        
        <h1 className="title font-semibold text-2xl tracking-tighter">{year}</h1>
        
        <div className="flex space-x-2">
          {isEditMode && (
            <button 
              onClick={() => {
                setMultiSelectMode(!multiSelectMode);
                if (multiSelectMode) {
                  exitMultiSelectMode();
                }
              }}
              className={`px-3 py-1 rounded text-sm ${
                multiSelectMode 
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 border border-blue-200 dark:border-blue-800' 
                  : 'bg-white border border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              {multiSelectMode ? 'Cancel Selection' : 'Select Multiple Days'}
            </button>
          )}
          
          <button 
            onClick={toggleEditMode} 
            className={`px-3 py-1 rounded text-sm ${
              isEditMode 
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 border border-blue-200 dark:border-blue-800' 
                : 'bg-white text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700'
            }`}
          >
            {isEditMode ? 'Save Calendar' : 'Edit Calendar'}
          </button>
        </div>
      </div>
      
      {/* Multi-select mode instructions */}
      {multiSelectMode && (
        <div className="mb-4 p-3 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <div className="flex-1">
              <label className="block text-sm mb-1 text-neutral-700 dark:text-neutral-300">Note for selected days:</label>
              <textarea
                className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-700 resize-none bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border-neutral-300 dark:border-neutral-700"
                value={tempNote}
                onChange={(e) => setTempNote(e.target.value)}
                placeholder="Enter note for all selected days..."
              />
            </div>
            
            <div>
              <label className="block text-sm mb-1 text-neutral-700 dark:text-neutral-300">Color:</label>
              <div className="flex flex-wrap gap-2">
                {colorOptions.map(color => (
                  <button
                    key={color.value}
                    className={`w-6 h-6 rounded ${selectedColor === color.value ? 'ring-2 ring-blue-400 dark:ring-blue-500' : 'border border-neutral-300 dark:border-neutral-700'}`}
                    style={{ backgroundColor: color.value }}
                    onClick={() => setSelectedColor(color.value)}
                    title={color.name}
                  ></button>
                ))}
              </div>
            </div>
            
            <div className="flex items-end">
              <button
                onClick={applyToSelectedDays}
                className="px-3 py-1 text-sm bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 rounded border border-blue-200 dark:border-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={selectedDays.length === 0}
              >
                Apply to {selectedDays.length} day{selectedDays.length !== 1 ? 's' : ''}
              </button>
            </div>
          </div>
          
          <div className="mt-2 text-xs text-blue-500 dark:text-blue-400">
            {!selectionStart ? (
              <p>Click on a day to start your selection</p>
            ) : !selectionEnd || selectionStart.noteKey === selectionEnd.noteKey ? (
              <p>Click on another day to complete your selection range</p>
            ) : (
              <p>Selection complete! Click "Apply" to save or select a different range</p>
            )}
          </div>
        </div>
      )}
      
      <div className="flex">
        {/* Month labels on the side */}
        <div className="w-12 pt-8">
          {weeks.map((_, weekIndex) => (
            <div key={`month-label-${weekIndex}`} className="h-16 flex items-center">
              {monthLabels[weekIndex] && (
                <div className="transform -rotate-90 origin-center whitespace-nowrap text-right w-full text-sm text-neutral-600 dark:text-neutral-400 uppercase">
                  {monthLabels[weekIndex]}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Calendar grid */}
        <div className="flex-1">
          <div className="grid grid-cols-7 gap-0 relative">
            {/* Day headers */}
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
              <div key={index} className="text-sm text-neutral-600 dark:text-neutral-400 text-center p-1 uppercase">
                {day}
              </div>
            ))}
            
            {/* Calendar weeks */}
            {weeks.map((week, weekIndex) => {
              // Process the week to find consecutive day runs with same groupId
              const processedRuns = [];
              for (let i = 0; i < week.length; i++) {
                if (week[i] && notes[week[i].noteKey]) {
                  // Handle individual days with notes too
                  const run = getGroupedDaysRun(week, i);
                  if (run) {
                    processedRuns.push(run);
                    i = run.endIdx; // Skip to the end of this run
                  } else if (notes[week[i].noteKey]) {
                    // Add individual days that have notes but aren't part of a multi-day run
                    processedRuns.push({
                      startIdx: i,
                      endIdx: i,
                      length: 1,
                      groupId: notes[week[i].noteKey].groupId || 'single-' + week[i].noteKey,
                      noteText: notes[week[i].noteKey].text
                    });
                  }
                }
              }
              
              return (
                <React.Fragment key={weekIndex}>
                  {week.map((dayInfo, dayIndex) => {
                    if (!dayInfo) {
                      // This ensures empty cells match the EXACT styling of date cells
                      return (
                        <div 
                          key={`${weekIndex}-${dayIndex}`}
                          className="h-16 p-1 border border-neutral-200 dark:border-neutral-700 overflow-hidden"
                          style={{
                            backgroundColor: 'white',
                            marginLeft: dayIndex === 0 ? '0' : '-1px',
                            marginTop: weekIndex === 0 ? '0' : '-1px',
                            position: 'relative'
                          }}
                        >
                          {/* Empty div with same structure as date cells */}
                          <div className="font-light text-xs text-neutral-700 dark:text-neutral-300"></div>
                          <div className="mt-1 h-10">
                            {isEditMode && !multiSelectMode && (
                              <div className="w-full h-full"></div>
                            )}
                          </div>
                        </div>
                      );
                    }
                    
                    const noteData = notes[dayInfo.noteKey];
                    const hasNote = Boolean(noteData);
                    const isSelected = isDaySelected(dayInfo.timestamp);
                    const dayColor = colors[dayInfo.noteKey] || null;
                    const selectionBorderClasses = getSelectionBorders(dayInfo);
                    
                    return (
                      <div 
                        key={`${weekIndex}-${dayIndex}`}
                        className={`h-16 p-1 border border-neutral-200 dark:border-neutral-700 overflow-hidden ${selectionBorderClasses}`}
                        style={{
                          backgroundColor: isSelected 
                            ? 'rgba(191, 219, 254, 0.3)' 
                            : (dayColor 
                                ? dayColor 
                                : isHighlightedBackground(dayInfo) 
                                  ? 'rgba(243, 232, 255, 0.5)' // Light purple like in screenshot
                                  : 'white'),
                          marginLeft: dayIndex === 0 ? '0' : '-1px',
                          marginTop: weekIndex === 0 ? '0' : '-1px',
                          position: 'relative',
                          zIndex: isSelected ? 10 : 1
                        }}
                        onClick={() => handleDayClick(dayInfo.noteKey, dayInfo.timestamp)}
                      >
                        <div className="font-light text-xs text-neutral-700 dark:text-neutral-300">{dayInfo.day}</div>
                        <div className="mt-1 h-10">
                          {isEditMode ? (
                            multiSelectMode ? (
                              // Multi-select mode - empty space for selection
                              <div className="w-full h-full"></div>
                            ) : (
                              // Regular edit mode - show notes or add button
                              !hasNote && (
                                <button
                                  className="w-full h-full text-xs border border-dashed border-neutral-300 dark:border-neutral-700 rounded text-neutral-400 dark:text-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-600 dark:hover:text-neutral-300 opacity-60 hover:opacity-100"
                                  onClick={(e) => {
                                    e.stopPropagation(); // Prevent triggering other click handlers
                                    // Set a temporary selection for just this day
                                    const timestamp = dayInfo.timestamp;
                                    setSelectionStart({ noteKey: dayInfo.noteKey, timestamp });
                                    setSelectionEnd({ noteKey: dayInfo.noteKey, timestamp });
                                    setTempNote('');
                                    setMultiSelectMode(true);
                                  }}
                                >
                                  +
                                </button>
                              )
                            )
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                  
                  {/* Render grouped note spans on top of the days */}
                  {!multiSelectMode && processedRuns.map((run, runIndex) => {
                    // Calculate more precise positioning for the note overlay
                    const cellWidth = 100 / 7; // Each day is 1/7 of the grid width
                    const left = `${run.startIdx * cellWidth}%`;
                    const width = `${run.length * cellWidth}%`;
                    
                    // Show notes for any length (including single day)
                    return (
                        <div 
                        className="w-full h-full text-xs p-1 overflow-auto border rounded flex items-center bg-transparent border-neutral-200 dark:border-neutral-700"
                        style={{ 
                          maxHeight: '40px',
                          fontSize: '0.65rem'
                        }}
                      >
                        <div 
                          className="w-full h-full text-xs p-1 overflow-auto border rounded flex items-center bg-white dark:bg-neutral-800 bg-opacity-95 dark:bg-opacity-95 border-neutral-200 dark:border-neutral-700"
                          style={{ 
                            maxHeight: '40px', // Match the parent height
                            fontSize: '0.65rem'
                          }}
                        >
                          {formatSavedNote({text: run.noteText})}
                        </div>
                      </div>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;