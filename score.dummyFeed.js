// loop through each shooter
// for each shooter-event
const toScore25 = [
  { squad_trap_id: 89, shooter_event_id: 1 },
  { squad_trap_id: 27, shooter_event_id: 1 },
  { squad_trap_id: 2, shooter_event_id: 1 },
  { squad_trap_id: 1, shooter_event_id: 1 },
  { squad_trap_id: 99, shooter_event_id: 2 },
  { squad_trap_id: 26, shooter_event_id: 2 },
  { squad_trap_id: 25, shooter_event_id: 2 },
  { squad_trap_id: 16, shooter_event_id: 2 },
  { squad_trap_id: 99, shooter_event_id: 3 },
  { squad_trap_id: 26, shooter_event_id: 3 },
  { squad_trap_id: 25, shooter_event_id: 3 },
  { squad_trap_id: 16, shooter_event_id: 3 },
  { squad_trap_id: 119, shooter_event_id: 4 },
  { squad_trap_id: 70, shooter_event_id: 4 },
  { squad_trap_id: 69, shooter_event_id: 4 },
  { squad_trap_id: 4, shooter_event_id: 4 },
  { squad_trap_id: 119, shooter_event_id: 5 },
  { squad_trap_id: 70, shooter_event_id: 5 },
  { squad_trap_id: 69, shooter_event_id: 5 },
  { squad_trap_id: 4, shooter_event_id: 5 },
  { squad_trap_id: 119, shooter_event_id: 6 },
  { squad_trap_id: 70, shooter_event_id: 6 },
  { squad_trap_id: 69, shooter_event_id: 6 },
  { squad_trap_id: 4, shooter_event_id: 6 },
  { squad_trap_id: 89, shooter_event_id: 7 },
  { squad_trap_id: 27, shooter_event_id: 7 },
  { squad_trap_id: 2, shooter_event_id: 7 },
  { squad_trap_id: 1, shooter_event_id: 7 },
  { squad_trap_id: 89, shooter_event_id: 8 },
  { squad_trap_id: 27, shooter_event_id: 8 },
  { squad_trap_id: 2, shooter_event_id: 8 },
  { squad_trap_id: 1, shooter_event_id: 8 },
  { squad_trap_id: 99, shooter_event_id: 9 },
  { squad_trap_id: 26, shooter_event_id: 9 },
  { squad_trap_id: 25, shooter_event_id: 9 },
  { squad_trap_id: 16, shooter_event_id: 9 },
  { squad_trap_id: 119, shooter_event_id: 10 },
  { squad_trap_id: 70, shooter_event_id: 10 },
  { squad_trap_id: 69, shooter_event_id: 10 },
  { squad_trap_id: 4, shooter_event_id: 10 },
  { squad_trap_id: 119, shooter_event_id: 11 },
  { squad_trap_id: 70, shooter_event_id: 11 },
  { squad_trap_id: 69, shooter_event_id: 11 },
  { squad_trap_id: 4, shooter_event_id: 11 },
  { squad_trap_id: 89, shooter_event_id: 12 },
  { squad_trap_id: 27, shooter_event_id: 12 },
  { squad_trap_id: 2, shooter_event_id: 12 },
  { squad_trap_id: 1, shooter_event_id: 12 },
  { squad_trap_id: 40, shooter_event_id: 13 },
  { squad_trap_id: 39, shooter_event_id: 13 },
  { squad_trap_id: 38, shooter_event_id: 13 },
  { squad_trap_id: 37, shooter_event_id: 13 },
  { squad_trap_id: 124, shooter_event_id: 14 },
  { squad_trap_id: 82, shooter_event_id: 14 },
  { squad_trap_id: 81, shooter_event_id: 14 },
  { squad_trap_id: 3, shooter_event_id: 14 },
  { squad_trap_id: 129, shooter_event_id: 15 },
  { squad_trap_id: 85, shooter_event_id: 15 },
  { squad_trap_id: 84, shooter_event_id: 15 },
  { squad_trap_id: 83, shooter_event_id: 15 },
  { squad_trap_id: 134, shooter_event_id: 16 },
  { squad_trap_id: 88, shooter_event_id: 16 },
  { squad_trap_id: 87, shooter_event_id: 16 },
  { squad_trap_id: 86, shooter_event_id: 16 },
  { squad_trap_id: 129, shooter_event_id: 17 },
  { squad_trap_id: 85, shooter_event_id: 17 },
  { squad_trap_id: 84, shooter_event_id: 17 },
  { squad_trap_id: 83, shooter_event_id: 17 },
  { squad_trap_id: 129, shooter_event_id: 18 },
  { squad_trap_id: 85, shooter_event_id: 18 },
  { squad_trap_id: 84, shooter_event_id: 18 },
  { squad_trap_id: 83, shooter_event_id: 18 },
  { squad_trap_id: 134, shooter_event_id: 19 },
  { squad_trap_id: 88, shooter_event_id: 19 },
  { squad_trap_id: 87, shooter_event_id: 19 },
  { squad_trap_id: 86, shooter_event_id: 19 },
  { squad_trap_id: 134, shooter_event_id: 20 },
  { squad_trap_id: 88, shooter_event_id: 20 },
  { squad_trap_id: 87, shooter_event_id: 20 },
  { squad_trap_id: 86, shooter_event_id: 20 },
  { squad_trap_id: 129, shooter_event_id: 21 },
  { squad_trap_id: 85, shooter_event_id: 21 },
  { squad_trap_id: 84, shooter_event_id: 21 },
  { squad_trap_id: 83, shooter_event_id: 21 },
  { squad_trap_id: 134, shooter_event_id: 22 },
  { squad_trap_id: 88, shooter_event_id: 22 },
  { squad_trap_id: 87, shooter_event_id: 22 },
  { squad_trap_id: 86, shooter_event_id: 22 },
  { squad_trap_id: 134, shooter_event_id: 23 },
  { squad_trap_id: 88, shooter_event_id: 23 },
  { squad_trap_id: 87, shooter_event_id: 23 },
  { squad_trap_id: 86, shooter_event_id: 23 },
  { squad_trap_id: 89, shooter_event_id: 24 },
  { squad_trap_id: 27, shooter_event_id: 24 },
  { squad_trap_id: 2, shooter_event_id: 24 },
  { squad_trap_id: 1, shooter_event_id: 24 },
  { squad_trap_id: 94, shooter_event_id: 25 },
  { squad_trap_id: 15, shooter_event_id: 25 },
  { squad_trap_id: 14, shooter_event_id: 25 },
  { squad_trap_id: 13, shooter_event_id: 25 },
  { squad_trap_id: 40, shooter_event_id: 26 },
  { squad_trap_id: 39, shooter_event_id: 26 },
  { squad_trap_id: 38, shooter_event_id: 26 },
  { squad_trap_id: 37, shooter_event_id: 26 },
  { squad_trap_id: 40, shooter_event_id: 27 },
  { squad_trap_id: 39, shooter_event_id: 27 },
  { squad_trap_id: 38, shooter_event_id: 27 },
  { squad_trap_id: 37, shooter_event_id: 27 },
  { squad_trap_id: 40, shooter_event_id: 28 },
  { squad_trap_id: 39, shooter_event_id: 28 },
  { squad_trap_id: 38, shooter_event_id: 28 },
  { squad_trap_id: 37, shooter_event_id: 28 },
  { squad_trap_id: 40, shooter_event_id: 29 },
  { squad_trap_id: 39, shooter_event_id: 29 },
  { squad_trap_id: 38, shooter_event_id: 29 },
  { squad_trap_id: 37, shooter_event_id: 29 },
  { squad_trap_id: 109, shooter_event_id: 30 },
  { squad_trap_id: 104, shooter_event_id: 30 },
  { squad_trap_id: 50, shooter_event_id: 30 },
  { squad_trap_id: 49, shooter_event_id: 30 },
  { squad_trap_id: 94, shooter_event_id: 31 },
  { squad_trap_id: 15, shooter_event_id: 31 },
  { squad_trap_id: 14, shooter_event_id: 31 },
  { squad_trap_id: 13, shooter_event_id: 31 },
  { squad_trap_id: 109, shooter_event_id: 32 },
  { squad_trap_id: 104, shooter_event_id: 32 },
  { squad_trap_id: 50, shooter_event_id: 32 },
  { squad_trap_id: 49, shooter_event_id: 32 },
  { squad_trap_id: 94, shooter_event_id: 33 },
  { squad_trap_id: 15, shooter_event_id: 33 },
  { squad_trap_id: 14, shooter_event_id: 33 },
  { squad_trap_id: 13, shooter_event_id: 33 },
  { squad_trap_id: 94, shooter_event_id: 34 },
  { squad_trap_id: 15, shooter_event_id: 34 },
  { squad_trap_id: 14, shooter_event_id: 34 },
  { squad_trap_id: 13, shooter_event_id: 34 },
  { squad_trap_id: 109, shooter_event_id: 35 },
  { squad_trap_id: 104, shooter_event_id: 35 },
  { squad_trap_id: 50, shooter_event_id: 35 },
  { squad_trap_id: 49, shooter_event_id: 35 },
  { squad_trap_id: 124, shooter_event_id: 36 },
  { squad_trap_id: 82, shooter_event_id: 36 },
  { squad_trap_id: 81, shooter_event_id: 36 },
  { squad_trap_id: 3, shooter_event_id: 36 },
  { squad_trap_id: 124, shooter_event_id: 37 },
  { squad_trap_id: 82, shooter_event_id: 37 },
  { squad_trap_id: 81, shooter_event_id: 37 },
  { squad_trap_id: 3, shooter_event_id: 37 },
  { squad_trap_id: 124, shooter_event_id: 38 },
  { squad_trap_id: 82, shooter_event_id: 38 },
  { squad_trap_id: 81, shooter_event_id: 38 },
  { squad_trap_id: 3, shooter_event_id: 38 },
  { squad_trap_id: 124, shooter_event_id: 39 },
  { squad_trap_id: 82, shooter_event_id: 39 },
  { squad_trap_id: 81, shooter_event_id: 39 },
  { squad_trap_id: 3, shooter_event_id: 39 },
  { squad_trap_id: 129, shooter_event_id: 40 },
  { squad_trap_id: 85, shooter_event_id: 40 },
  { squad_trap_id: 84, shooter_event_id: 40 },
  { squad_trap_id: 83, shooter_event_id: 40 },
  { squad_trap_id: 109, shooter_event_id: 41 },
  { squad_trap_id: 104, shooter_event_id: 41 },
  { squad_trap_id: 50, shooter_event_id: 41 },
  { squad_trap_id: 49, shooter_event_id: 41 },
  { squad_trap_id: 109, shooter_event_id: 42 },
  { squad_trap_id: 104, shooter_event_id: 42 },
  { squad_trap_id: 50, shooter_event_id: 42 },
  { squad_trap_id: 49, shooter_event_id: 42 },
  { squad_trap_id: 114, shooter_event_id: 43 },
  { squad_trap_id: 60, shooter_event_id: 43 },
  { squad_trap_id: 59, shooter_event_id: 43 },
  { squad_trap_id: 28, shooter_event_id: 43 },
  { squad_trap_id: 114, shooter_event_id: 44 },
  { squad_trap_id: 60, shooter_event_id: 44 },
  { squad_trap_id: 59, shooter_event_id: 44 },
  { squad_trap_id: 28, shooter_event_id: 44 },
  { squad_trap_id: 94, shooter_event_id: 45 },
  { squad_trap_id: 15, shooter_event_id: 45 },
  { squad_trap_id: 14, shooter_event_id: 45 },
  { squad_trap_id: 13, shooter_event_id: 45 },
  { squad_trap_id: 99, shooter_event_id: 46 },
  { squad_trap_id: 26, shooter_event_id: 46 },
  { squad_trap_id: 25, shooter_event_id: 46 },
  { squad_trap_id: 16, shooter_event_id: 46 },
  { squad_trap_id: 99, shooter_event_id: 47 },
  { squad_trap_id: 26, shooter_event_id: 47 },
  { squad_trap_id: 25, shooter_event_id: 47 },
  { squad_trap_id: 16, shooter_event_id: 47 },
  { squad_trap_id: 114, shooter_event_id: 48 },
  { squad_trap_id: 60, shooter_event_id: 48 },
  { squad_trap_id: 59, shooter_event_id: 48 },
  { squad_trap_id: 28, shooter_event_id: 48 },
  { squad_trap_id: 114, shooter_event_id: 49 },
  { squad_trap_id: 60, shooter_event_id: 49 },
  { squad_trap_id: 59, shooter_event_id: 49 },
  { squad_trap_id: 28, shooter_event_id: 49 },
  { squad_trap_id: 114, shooter_event_id: 50 },
  { squad_trap_id: 60, shooter_event_id: 50 },
  { squad_trap_id: 59, shooter_event_id: 50 },
  { squad_trap_id: 28, shooter_event_id: 50 },
  { squad_trap_id: 136, shooter_event_id: 51 },
  { squad_trap_id: 133, shooter_event_id: 51 },
  { squad_trap_id: 130, shooter_event_id: 51 },
  { squad_trap_id: 127, shooter_event_id: 51 },
  { squad_trap_id: 138, shooter_event_id: 52 },
  { squad_trap_id: 135, shooter_event_id: 52 },
  { squad_trap_id: 132, shooter_event_id: 52 },
  { squad_trap_id: 126, shooter_event_id: 52 },
  { squad_trap_id: 93, shooter_event_id: 53 },
  { squad_trap_id: 92, shooter_event_id: 53 },
  { squad_trap_id: 91, shooter_event_id: 53 },
  { squad_trap_id: 90, shooter_event_id: 53 },
  { squad_trap_id: 98, shooter_event_id: 54 },
  { squad_trap_id: 97, shooter_event_id: 54 },
  { squad_trap_id: 96, shooter_event_id: 54 },
  { squad_trap_id: 95, shooter_event_id: 54 },
  { squad_trap_id: 103, shooter_event_id: 55 },
  { squad_trap_id: 102, shooter_event_id: 55 },
  { squad_trap_id: 101, shooter_event_id: 55 },
  { squad_trap_id: 100, shooter_event_id: 55 },
  { squad_trap_id: 108, shooter_event_id: 56 },
  { squad_trap_id: 107, shooter_event_id: 56 },
  { squad_trap_id: 106, shooter_event_id: 56 },
  { squad_trap_id: 105, shooter_event_id: 56 },
  { squad_trap_id: 113, shooter_event_id: 57 },
  { squad_trap_id: 112, shooter_event_id: 57 },
  { squad_trap_id: 111, shooter_event_id: 57 },
  { squad_trap_id: 110, shooter_event_id: 57 },
  { squad_trap_id: 123, shooter_event_id: 58 },
  { squad_trap_id: 122, shooter_event_id: 58 },
  { squad_trap_id: 116, shooter_event_id: 58 },
  { squad_trap_id: 115, shooter_event_id: 58 },
  { squad_trap_id: 121, shooter_event_id: 59 },
  { squad_trap_id: 120, shooter_event_id: 59 },
  { squad_trap_id: 118, shooter_event_id: 59 },
  { squad_trap_id: 117, shooter_event_id: 59 },
  { squad_trap_id: 103, shooter_event_id: 60 },
  { squad_trap_id: 102, shooter_event_id: 60 },
  { squad_trap_id: 101, shooter_event_id: 60 },
  { squad_trap_id: 100, shooter_event_id: 60 },
  { squad_trap_id: 137, shooter_event_id: 61 },
  { squad_trap_id: 131, shooter_event_id: 61 },
  { squad_trap_id: 128, shooter_event_id: 61 },
  { squad_trap_id: 125, shooter_event_id: 61 },
  { squad_trap_id: 136, shooter_event_id: 62 },
  { squad_trap_id: 133, shooter_event_id: 62 },
  { squad_trap_id: 130, shooter_event_id: 62 },
  { squad_trap_id: 127, shooter_event_id: 62 },
  { squad_trap_id: 98, shooter_event_id: 63 },
  { squad_trap_id: 97, shooter_event_id: 63 },
  { squad_trap_id: 96, shooter_event_id: 63 },
  { squad_trap_id: 95, shooter_event_id: 63 },
  { squad_trap_id: 103, shooter_event_id: 64 },
  { squad_trap_id: 102, shooter_event_id: 64 },
  { squad_trap_id: 101, shooter_event_id: 64 },
  { squad_trap_id: 100, shooter_event_id: 64 },
  { squad_trap_id: 108, shooter_event_id: 65 },
  { squad_trap_id: 107, shooter_event_id: 65 },
  { squad_trap_id: 106, shooter_event_id: 65 },
  { squad_trap_id: 105, shooter_event_id: 65 },
  { squad_trap_id: 113, shooter_event_id: 66 },
  { squad_trap_id: 112, shooter_event_id: 66 },
  { squad_trap_id: 111, shooter_event_id: 66 },
  { squad_trap_id: 110, shooter_event_id: 66 },
  { squad_trap_id: 123, shooter_event_id: 67 },
  { squad_trap_id: 122, shooter_event_id: 67 },
  { squad_trap_id: 116, shooter_event_id: 67 },
  { squad_trap_id: 115, shooter_event_id: 67 },
  { squad_trap_id: 98, shooter_event_id: 68 },
  { squad_trap_id: 97, shooter_event_id: 68 },
  { squad_trap_id: 96, shooter_event_id: 68 },
  { squad_trap_id: 95, shooter_event_id: 68 },
  { squad_trap_id: 113, shooter_event_id: 69 },
  { squad_trap_id: 112, shooter_event_id: 69 },
  { squad_trap_id: 111, shooter_event_id: 69 },
  { squad_trap_id: 110, shooter_event_id: 69 },
  { squad_trap_id: 121, shooter_event_id: 70 },
  { squad_trap_id: 120, shooter_event_id: 70 },
  { squad_trap_id: 118, shooter_event_id: 70 },
  { squad_trap_id: 117, shooter_event_id: 70 },
  { squad_trap_id: 137, shooter_event_id: 71 },
  { squad_trap_id: 131, shooter_event_id: 71 },
  { squad_trap_id: 128, shooter_event_id: 71 },
  { squad_trap_id: 125, shooter_event_id: 71 },
  { squad_trap_id: 136, shooter_event_id: 72 },
  { squad_trap_id: 133, shooter_event_id: 72 },
  { squad_trap_id: 130, shooter_event_id: 72 },
  { squad_trap_id: 127, shooter_event_id: 72 },
  { squad_trap_id: 138, shooter_event_id: 73 },
  { squad_trap_id: 135, shooter_event_id: 73 },
  { squad_trap_id: 132, shooter_event_id: 73 },
  { squad_trap_id: 126, shooter_event_id: 73 },
  { squad_trap_id: 93, shooter_event_id: 74 },
  { squad_trap_id: 92, shooter_event_id: 74 },
  { squad_trap_id: 91, shooter_event_id: 74 },
  { squad_trap_id: 90, shooter_event_id: 74 },
  { squad_trap_id: 98, shooter_event_id: 75 },
  { squad_trap_id: 97, shooter_event_id: 75 },
  { squad_trap_id: 96, shooter_event_id: 75 },
  { squad_trap_id: 95, shooter_event_id: 75 },
  { squad_trap_id: 108, shooter_event_id: 76 },
  { squad_trap_id: 107, shooter_event_id: 76 },
  { squad_trap_id: 106, shooter_event_id: 76 },
  { squad_trap_id: 105, shooter_event_id: 76 },
  { squad_trap_id: 113, shooter_event_id: 77 },
  { squad_trap_id: 112, shooter_event_id: 77 },
  { squad_trap_id: 111, shooter_event_id: 77 },
  { squad_trap_id: 110, shooter_event_id: 77 },
  { squad_trap_id: 123, shooter_event_id: 78 },
  { squad_trap_id: 122, shooter_event_id: 78 },
  { squad_trap_id: 116, shooter_event_id: 78 },
  { squad_trap_id: 115, shooter_event_id: 78 },
  { squad_trap_id: 121, shooter_event_id: 79 },
  { squad_trap_id: 120, shooter_event_id: 79 },
  { squad_trap_id: 118, shooter_event_id: 79 },
  { squad_trap_id: 117, shooter_event_id: 79 },
  { squad_trap_id: 137, shooter_event_id: 80 },
  { squad_trap_id: 131, shooter_event_id: 80 },
  { squad_trap_id: 128, shooter_event_id: 80 },
  { squad_trap_id: 125, shooter_event_id: 80 },
  { squad_trap_id: 136, shooter_event_id: 81 },
  { squad_trap_id: 133, shooter_event_id: 81 },
  { squad_trap_id: 130, shooter_event_id: 81 },
  { squad_trap_id: 127, shooter_event_id: 81 },
  { squad_trap_id: 138, shooter_event_id: 82 },
  { squad_trap_id: 135, shooter_event_id: 82 },
  { squad_trap_id: 132, shooter_event_id: 82 },
  { squad_trap_id: 126, shooter_event_id: 82 },
  { squad_trap_id: 93, shooter_event_id: 83 },
  { squad_trap_id: 92, shooter_event_id: 83 },
  { squad_trap_id: 91, shooter_event_id: 83 },
  { squad_trap_id: 90, shooter_event_id: 83 },
  { squad_trap_id: 138, shooter_event_id: 84 },
  { squad_trap_id: 135, shooter_event_id: 84 },
  { squad_trap_id: 132, shooter_event_id: 84 },
  { squad_trap_id: 126, shooter_event_id: 84 },
  { squad_trap_id: 93, shooter_event_id: 85 },
  { squad_trap_id: 92, shooter_event_id: 85 },
  { squad_trap_id: 91, shooter_event_id: 85 },
  { squad_trap_id: 90, shooter_event_id: 85 },
  { squad_trap_id: 93, shooter_event_id: 86 },
  { squad_trap_id: 92, shooter_event_id: 86 },
  { squad_trap_id: 91, shooter_event_id: 86 },
  { squad_trap_id: 90, shooter_event_id: 86 },
  { squad_trap_id: 98, shooter_event_id: 87 },
  { squad_trap_id: 97, shooter_event_id: 87 },
  { squad_trap_id: 96, shooter_event_id: 87 },
  { squad_trap_id: 95, shooter_event_id: 87 },
  { squad_trap_id: 103, shooter_event_id: 88 },
  { squad_trap_id: 102, shooter_event_id: 88 },
  { squad_trap_id: 101, shooter_event_id: 88 },
  { squad_trap_id: 100, shooter_event_id: 88 },
  { squad_trap_id: 108, shooter_event_id: 89 },
  { squad_trap_id: 107, shooter_event_id: 89 },
  { squad_trap_id: 106, shooter_event_id: 89 },
  { squad_trap_id: 105, shooter_event_id: 89 },
  { squad_trap_id: 113, shooter_event_id: 90 },
  { squad_trap_id: 112, shooter_event_id: 90 },
  { squad_trap_id: 111, shooter_event_id: 90 },
  { squad_trap_id: 110, shooter_event_id: 90 },
  { squad_trap_id: 123, shooter_event_id: 91 },
  { squad_trap_id: 122, shooter_event_id: 91 },
  { squad_trap_id: 116, shooter_event_id: 91 },
  { squad_trap_id: 115, shooter_event_id: 91 },
  { squad_trap_id: 121, shooter_event_id: 92 },
  { squad_trap_id: 120, shooter_event_id: 92 },
  { squad_trap_id: 118, shooter_event_id: 92 },
  { squad_trap_id: 117, shooter_event_id: 92 },
  { squad_trap_id: 137, shooter_event_id: 93 },
  { squad_trap_id: 131, shooter_event_id: 93 },
  { squad_trap_id: 128, shooter_event_id: 93 },
  { squad_trap_id: 125, shooter_event_id: 93 },
  { squad_trap_id: 121, shooter_event_id: 94 },
  { squad_trap_id: 120, shooter_event_id: 94 },
  { squad_trap_id: 118, shooter_event_id: 94 },
  { squad_trap_id: 117, shooter_event_id: 94 },
  { squad_trap_id: 136, shooter_event_id: 95 },
  { squad_trap_id: 133, shooter_event_id: 95 },
  { squad_trap_id: 130, shooter_event_id: 95 },
  { squad_trap_id: 127, shooter_event_id: 95 },
  { squad_trap_id: 138, shooter_event_id: 96 },
  { squad_trap_id: 135, shooter_event_id: 96 },
  { squad_trap_id: 132, shooter_event_id: 96 },
  { squad_trap_id: 126, shooter_event_id: 96 },
  { squad_trap_id: 12, shooter_event_id: 97 },
  { squad_trap_id: 11, shooter_event_id: 97 },
  { squad_trap_id: 10, shooter_event_id: 97 },
  { squad_trap_id: 9, shooter_event_id: 97 },
  { squad_trap_id: 8, shooter_event_id: 97 },
  { squad_trap_id: 7, shooter_event_id: 97 },
  { squad_trap_id: 6, shooter_event_id: 97 },
  { squad_trap_id: 5, shooter_event_id: 97 },
  { squad_trap_id: 24, shooter_event_id: 98 },
  { squad_trap_id: 23, shooter_event_id: 98 },
  { squad_trap_id: 22, shooter_event_id: 98 },
  { squad_trap_id: 21, shooter_event_id: 98 },
  { squad_trap_id: 20, shooter_event_id: 98 },
  { squad_trap_id: 19, shooter_event_id: 98 },
  { squad_trap_id: 18, shooter_event_id: 98 },
  { squad_trap_id: 17, shooter_event_id: 98 },
  { squad_trap_id: 12, shooter_event_id: 99 },
  { squad_trap_id: 11, shooter_event_id: 99 },
  { squad_trap_id: 10, shooter_event_id: 99 },
  { squad_trap_id: 9, shooter_event_id: 99 },
  { squad_trap_id: 8, shooter_event_id: 99 },
  { squad_trap_id: 7, shooter_event_id: 99 },
  { squad_trap_id: 6, shooter_event_id: 99 },
  { squad_trap_id: 5, shooter_event_id: 99 },
  { squad_trap_id: 24, shooter_event_id: 100 },
  { squad_trap_id: 23, shooter_event_id: 100 },
  { squad_trap_id: 22, shooter_event_id: 100 },
  { squad_trap_id: 21, shooter_event_id: 100 },
  { squad_trap_id: 20, shooter_event_id: 100 },
  { squad_trap_id: 19, shooter_event_id: 100 },
  { squad_trap_id: 18, shooter_event_id: 100 },
  { squad_trap_id: 17, shooter_event_id: 100 },
  { squad_trap_id: 36, shooter_event_id: 101 },
  { squad_trap_id: 35, shooter_event_id: 101 },
  { squad_trap_id: 34, shooter_event_id: 101 },
  { squad_trap_id: 33, shooter_event_id: 101 },
  { squad_trap_id: 32, shooter_event_id: 101 },
  { squad_trap_id: 31, shooter_event_id: 101 },
  { squad_trap_id: 30, shooter_event_id: 101 },
  { squad_trap_id: 29, shooter_event_id: 101 },
  { squad_trap_id: 48, shooter_event_id: 102 },
  { squad_trap_id: 47, shooter_event_id: 102 },
  { squad_trap_id: 46, shooter_event_id: 102 },
  { squad_trap_id: 45, shooter_event_id: 102 },
  { squad_trap_id: 44, shooter_event_id: 102 },
  { squad_trap_id: 43, shooter_event_id: 102 },
  { squad_trap_id: 42, shooter_event_id: 102 },
  { squad_trap_id: 41, shooter_event_id: 102 },
  { squad_trap_id: 79, shooter_event_id: 103 },
  { squad_trap_id: 76, shooter_event_id: 103 },
  { squad_trap_id: 73, shooter_event_id: 103 },
  { squad_trap_id: 68, shooter_event_id: 103 },
  { squad_trap_id: 65, shooter_event_id: 103 },
  { squad_trap_id: 62, shooter_event_id: 103 },
  { squad_trap_id: 57, shooter_event_id: 103 },
  { squad_trap_id: 54, shooter_event_id: 103 },
  { squad_trap_id: 51, shooter_event_id: 103 },
  { squad_trap_id: 80, shooter_event_id: 104 },
  { squad_trap_id: 77, shooter_event_id: 104 },
  { squad_trap_id: 74, shooter_event_id: 104 },
  { squad_trap_id: 71, shooter_event_id: 104 },
  { squad_trap_id: 66, shooter_event_id: 104 },
  { squad_trap_id: 63, shooter_event_id: 104 },
  { squad_trap_id: 56, shooter_event_id: 104 },
  { squad_trap_id: 53, shooter_event_id: 104 },
  { squad_trap_id: 12, shooter_event_id: 105 },
  { squad_trap_id: 11, shooter_event_id: 105 },
  { squad_trap_id: 10, shooter_event_id: 105 },
  { squad_trap_id: 9, shooter_event_id: 105 },
  { squad_trap_id: 8, shooter_event_id: 105 },
  { squad_trap_id: 7, shooter_event_id: 105 },
  { squad_trap_id: 6, shooter_event_id: 105 },
  { squad_trap_id: 5, shooter_event_id: 105 },
  { squad_trap_id: 36, shooter_event_id: 106 },
  { squad_trap_id: 35, shooter_event_id: 106 },
  { squad_trap_id: 34, shooter_event_id: 106 },
  { squad_trap_id: 33, shooter_event_id: 106 },
  { squad_trap_id: 32, shooter_event_id: 106 },
  { squad_trap_id: 31, shooter_event_id: 106 },
  { squad_trap_id: 30, shooter_event_id: 106 },
  { squad_trap_id: 29, shooter_event_id: 106 },
  { squad_trap_id: 78, shooter_event_id: 107 },
  { squad_trap_id: 75, shooter_event_id: 107 },
  { squad_trap_id: 72, shooter_event_id: 107 },
  { squad_trap_id: 67, shooter_event_id: 107 },
  { squad_trap_id: 64, shooter_event_id: 107 },
  { squad_trap_id: 61, shooter_event_id: 107 },
  { squad_trap_id: 58, shooter_event_id: 107 },
  { squad_trap_id: 55, shooter_event_id: 107 },
  { squad_trap_id: 52, shooter_event_id: 107 },
  { squad_trap_id: 78, shooter_event_id: 108 },
  { squad_trap_id: 75, shooter_event_id: 108 },
  { squad_trap_id: 72, shooter_event_id: 108 },
  { squad_trap_id: 67, shooter_event_id: 108 },
  { squad_trap_id: 64, shooter_event_id: 108 },
  { squad_trap_id: 61, shooter_event_id: 108 },
  { squad_trap_id: 58, shooter_event_id: 108 },
  { squad_trap_id: 55, shooter_event_id: 108 },
  { squad_trap_id: 52, shooter_event_id: 108 },
  { squad_trap_id: 80, shooter_event_id: 109 },
  { squad_trap_id: 77, shooter_event_id: 109 },
  { squad_trap_id: 74, shooter_event_id: 109 },
  { squad_trap_id: 71, shooter_event_id: 109 },
  { squad_trap_id: 66, shooter_event_id: 109 },
  { squad_trap_id: 63, shooter_event_id: 109 },
  { squad_trap_id: 56, shooter_event_id: 109 },
  { squad_trap_id: 53, shooter_event_id: 109 },
  { squad_trap_id: 36, shooter_event_id: 110 },
  { squad_trap_id: 35, shooter_event_id: 110 },
  { squad_trap_id: 34, shooter_event_id: 110 },
  { squad_trap_id: 33, shooter_event_id: 110 },
  { squad_trap_id: 32, shooter_event_id: 110 },
  { squad_trap_id: 31, shooter_event_id: 110 },
  { squad_trap_id: 30, shooter_event_id: 110 },
  { squad_trap_id: 29, shooter_event_id: 110 },
  { squad_trap_id: 48, shooter_event_id: 111 },
  { squad_trap_id: 47, shooter_event_id: 111 },
  { squad_trap_id: 46, shooter_event_id: 111 },
  { squad_trap_id: 45, shooter_event_id: 111 },
  { squad_trap_id: 44, shooter_event_id: 111 },
  { squad_trap_id: 43, shooter_event_id: 111 },
  { squad_trap_id: 42, shooter_event_id: 111 },
  { squad_trap_id: 41, shooter_event_id: 111 },
  { squad_trap_id: 79, shooter_event_id: 112 },
  { squad_trap_id: 76, shooter_event_id: 112 },
  { squad_trap_id: 73, shooter_event_id: 112 },
  { squad_trap_id: 68, shooter_event_id: 112 },
  { squad_trap_id: 65, shooter_event_id: 112 },
  { squad_trap_id: 62, shooter_event_id: 112 },
  { squad_trap_id: 57, shooter_event_id: 112 },
  { squad_trap_id: 54, shooter_event_id: 112 },
  { squad_trap_id: 51, shooter_event_id: 112 },
  { squad_trap_id: 78, shooter_event_id: 113 },
  { squad_trap_id: 75, shooter_event_id: 113 },
  { squad_trap_id: 72, shooter_event_id: 113 },
  { squad_trap_id: 67, shooter_event_id: 113 },
  { squad_trap_id: 64, shooter_event_id: 113 },
  { squad_trap_id: 61, shooter_event_id: 113 },
  { squad_trap_id: 58, shooter_event_id: 113 },
  { squad_trap_id: 55, shooter_event_id: 113 },
  { squad_trap_id: 52, shooter_event_id: 113 },
  { squad_trap_id: 48, shooter_event_id: 114 },
  { squad_trap_id: 47, shooter_event_id: 114 },
  { squad_trap_id: 46, shooter_event_id: 114 },
  { squad_trap_id: 45, shooter_event_id: 114 },
  { squad_trap_id: 44, shooter_event_id: 114 },
  { squad_trap_id: 43, shooter_event_id: 114 },
  { squad_trap_id: 42, shooter_event_id: 114 },
  { squad_trap_id: 41, shooter_event_id: 114 },
  { squad_trap_id: 79, shooter_event_id: 115 },
  { squad_trap_id: 76, shooter_event_id: 115 },
  { squad_trap_id: 73, shooter_event_id: 115 },
  { squad_trap_id: 68, shooter_event_id: 115 },
  { squad_trap_id: 65, shooter_event_id: 115 },
  { squad_trap_id: 62, shooter_event_id: 115 },
  { squad_trap_id: 57, shooter_event_id: 115 },
  { squad_trap_id: 54, shooter_event_id: 115 },
  { squad_trap_id: 51, shooter_event_id: 115 },
  { squad_trap_id: 80, shooter_event_id: 116 },
  { squad_trap_id: 77, shooter_event_id: 116 },
  { squad_trap_id: 74, shooter_event_id: 116 },
  { squad_trap_id: 71, shooter_event_id: 116 },
  { squad_trap_id: 66, shooter_event_id: 116 },
  { squad_trap_id: 63, shooter_event_id: 116 },
  { squad_trap_id: 56, shooter_event_id: 116 },
  { squad_trap_id: 53, shooter_event_id: 116 },
  { squad_trap_id: 24, shooter_event_id: 117 },
  { squad_trap_id: 23, shooter_event_id: 117 },
  { squad_trap_id: 22, shooter_event_id: 117 },
  { squad_trap_id: 21, shooter_event_id: 117 },
  { squad_trap_id: 20, shooter_event_id: 117 },
  { squad_trap_id: 19, shooter_event_id: 117 },
  { squad_trap_id: 18, shooter_event_id: 117 },
  { squad_trap_id: 17, shooter_event_id: 117 },
  { squad_trap_id: 78, shooter_event_id: 118 },
  { squad_trap_id: 75, shooter_event_id: 118 },
  { squad_trap_id: 72, shooter_event_id: 118 },
  { squad_trap_id: 67, shooter_event_id: 118 },
  { squad_trap_id: 64, shooter_event_id: 118 },
  { squad_trap_id: 61, shooter_event_id: 118 },
  { squad_trap_id: 58, shooter_event_id: 118 },
  { squad_trap_id: 55, shooter_event_id: 118 },
  { squad_trap_id: 52, shooter_event_id: 118 },
  { squad_trap_id: 36, shooter_event_id: 119 },
  { squad_trap_id: 35, shooter_event_id: 119 },
  { squad_trap_id: 34, shooter_event_id: 119 },
  { squad_trap_id: 33, shooter_event_id: 119 },
  { squad_trap_id: 32, shooter_event_id: 119 },
  { squad_trap_id: 31, shooter_event_id: 119 },
  { squad_trap_id: 30, shooter_event_id: 119 },
  { squad_trap_id: 29, shooter_event_id: 119 },
  { squad_trap_id: 79, shooter_event_id: 120 },
  { squad_trap_id: 76, shooter_event_id: 120 },
  { squad_trap_id: 73, shooter_event_id: 120 },
  { squad_trap_id: 68, shooter_event_id: 120 },
  { squad_trap_id: 65, shooter_event_id: 120 },
  { squad_trap_id: 62, shooter_event_id: 120 },
  { squad_trap_id: 57, shooter_event_id: 120 },
  { squad_trap_id: 54, shooter_event_id: 120 },
  { squad_trap_id: 51, shooter_event_id: 120 },
  { squad_trap_id: 24, shooter_event_id: 121 },
  { squad_trap_id: 23, shooter_event_id: 121 },
  { squad_trap_id: 22, shooter_event_id: 121 },
  { squad_trap_id: 21, shooter_event_id: 121 },
  { squad_trap_id: 20, shooter_event_id: 121 },
  { squad_trap_id: 19, shooter_event_id: 121 },
  { squad_trap_id: 18, shooter_event_id: 121 },
  { squad_trap_id: 17, shooter_event_id: 121 },
  { squad_trap_id: 80, shooter_event_id: 122 },
  { squad_trap_id: 77, shooter_event_id: 122 },
  { squad_trap_id: 74, shooter_event_id: 122 },
  { squad_trap_id: 71, shooter_event_id: 122 },
  { squad_trap_id: 66, shooter_event_id: 122 },
  { squad_trap_id: 63, shooter_event_id: 122 },
  { squad_trap_id: 56, shooter_event_id: 122 },
  { squad_trap_id: 53, shooter_event_id: 122 },
  { squad_trap_id: 12, shooter_event_id: 123 },
  { squad_trap_id: 11, shooter_event_id: 123 },
  { squad_trap_id: 10, shooter_event_id: 123 },
  { squad_trap_id: 9, shooter_event_id: 123 },
  { squad_trap_id: 8, shooter_event_id: 123 },
  { squad_trap_id: 7, shooter_event_id: 123 },
  { squad_trap_id: 6, shooter_event_id: 123 },
  { squad_trap_id: 5, shooter_event_id: 123 },
  { squad_trap_id: 24, shooter_event_id: 124 },
  { squad_trap_id: 23, shooter_event_id: 124 },
  { squad_trap_id: 22, shooter_event_id: 124 },
  { squad_trap_id: 21, shooter_event_id: 124 },
  { squad_trap_id: 20, shooter_event_id: 124 },
  { squad_trap_id: 19, shooter_event_id: 124 },
  { squad_trap_id: 18, shooter_event_id: 124 },
  { squad_trap_id: 17, shooter_event_id: 124 },
  { squad_trap_id: 36, shooter_event_id: 125 },
  { squad_trap_id: 35, shooter_event_id: 125 },
  { squad_trap_id: 34, shooter_event_id: 125 },
  { squad_trap_id: 33, shooter_event_id: 125 },
  { squad_trap_id: 32, shooter_event_id: 125 },
  { squad_trap_id: 31, shooter_event_id: 125 },
  { squad_trap_id: 30, shooter_event_id: 125 },
  { squad_trap_id: 29, shooter_event_id: 125 },
  { squad_trap_id: 48, shooter_event_id: 126 },
  { squad_trap_id: 47, shooter_event_id: 126 },
  { squad_trap_id: 46, shooter_event_id: 126 },
  { squad_trap_id: 45, shooter_event_id: 126 },
  { squad_trap_id: 44, shooter_event_id: 126 },
  { squad_trap_id: 43, shooter_event_id: 126 },
  { squad_trap_id: 42, shooter_event_id: 126 },
  { squad_trap_id: 41, shooter_event_id: 126 },
  { squad_trap_id: 79, shooter_event_id: 127 },
  { squad_trap_id: 76, shooter_event_id: 127 },
  { squad_trap_id: 73, shooter_event_id: 127 },
  { squad_trap_id: 68, shooter_event_id: 127 },
  { squad_trap_id: 65, shooter_event_id: 127 },
  { squad_trap_id: 62, shooter_event_id: 127 },
  { squad_trap_id: 57, shooter_event_id: 127 },
  { squad_trap_id: 54, shooter_event_id: 127 },
  { squad_trap_id: 51, shooter_event_id: 127 },
  { squad_trap_id: 78, shooter_event_id: 128 },
  { squad_trap_id: 75, shooter_event_id: 128 },
  { squad_trap_id: 72, shooter_event_id: 128 },
  { squad_trap_id: 67, shooter_event_id: 128 },
  { squad_trap_id: 64, shooter_event_id: 128 },
  { squad_trap_id: 61, shooter_event_id: 128 },
  { squad_trap_id: 58, shooter_event_id: 128 },
  { squad_trap_id: 55, shooter_event_id: 128 },
  { squad_trap_id: 52, shooter_event_id: 128 },
  { squad_trap_id: 80, shooter_event_id: 129 },
  { squad_trap_id: 77, shooter_event_id: 129 },
  { squad_trap_id: 74, shooter_event_id: 129 },
  { squad_trap_id: 71, shooter_event_id: 129 },
  { squad_trap_id: 66, shooter_event_id: 129 },
  { squad_trap_id: 63, shooter_event_id: 129 },
  { squad_trap_id: 56, shooter_event_id: 129 },
  { squad_trap_id: 53, shooter_event_id: 129 },
  { squad_trap_id: 148, shooter_event_id: 130 },
  { squad_trap_id: 147, shooter_event_id: 130 },
  { squad_trap_id: 146, shooter_event_id: 130 },
  { squad_trap_id: 144, shooter_event_id: 130 },
  { squad_trap_id: 145, shooter_event_id: 132 },
  { squad_trap_id: 139, shooter_event_id: 132 },
  { squad_trap_id: 145, shooter_event_id: 139 },
  { squad_trap_id: 139, shooter_event_id: 139 },
  { squad_trap_id: 143, shooter_event_id: 141 },
  { squad_trap_id: 142, shooter_event_id: 141 },
  { squad_trap_id: 141, shooter_event_id: 141 },
  { squad_trap_id: 140, shooter_event_id: 141 },
  { squad_trap_id: 145, shooter_event_id: 147 },
  { squad_trap_id: 139, shooter_event_id: 147 },
  { squad_trap_id: 143, shooter_event_id: 151 },
  { squad_trap_id: 142, shooter_event_id: 151 },
  { squad_trap_id: 141, shooter_event_id: 151 },
  { squad_trap_id: 140, shooter_event_id: 151 },
  { squad_trap_id: 143, shooter_event_id: 152 },
  { squad_trap_id: 142, shooter_event_id: 152 },
  { squad_trap_id: 141, shooter_event_id: 152 },
  { squad_trap_id: 140, shooter_event_id: 152 },
  { squad_trap_id: 143, shooter_event_id: 159 },
  { squad_trap_id: 142, shooter_event_id: 159 },
  { squad_trap_id: 141, shooter_event_id: 159 },
  { squad_trap_id: 140, shooter_event_id: 159 },
  { squad_trap_id: 145, shooter_event_id: 160 },
  { squad_trap_id: 139, shooter_event_id: 160 },
  { squad_trap_id: 148, shooter_event_id: 166 },
  { squad_trap_id: 147, shooter_event_id: 166 },
  { squad_trap_id: 146, shooter_event_id: 166 },
  { squad_trap_id: 144, shooter_event_id: 166 },
];

module.exports = toScore25;