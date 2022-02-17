
/**
 *  GPA, Grade & CGPA Result
 *  Assignment 02
 */

// Constructor Function For Result
function Result(){

    // GPA & GRADE Calculator
    this.gpa_and_grade = function( mark ){
            
        let gpa;
        let grade;
            
        if( mark >= 0 && mark < 32 ){
            gpa = 0;
            grade = 'F';
        }else if( mark >= 33 && mark < 40 ){
            gpa = 1;
            grade = 'D';
        }else if( mark >= 40 && mark < 50 ){
            gpa = 2;
            grade = 'C';
        }else if( mark >= 50 && mark < 60 ){
            gpa = 3;
            grade = 'B';
        }else if( mark >= 60 && mark < 70 ){
            gpa = 3.5;
            grade = 'A-';
        }else if( mark >= 70 && mark < 80 ){
            gpa = 4;
            grade = 'A';
        }else if( mark >= 80 && mark <= 100 ){
            gpa = 5;
            grade = 'A+';
        }else{
            gpa = 'invalid';
            grade = 'invalid';
        }

        return {
            gpaCal : gpa,
            gradeCal : grade
        };

    };
            
    // total Grade
    this.finalGrade = function( bn, en, mt, sc, ss, re ){
            
        let totalgpa = 
            this.gpa_and_grade(bn).gpaCal + this.gpa_and_grade(en).gpaCal + this.gpa_and_grade(mt).gpaCal + this.gpa_and_grade(sc).gpaCal + this.gpa_and_grade(ss).gpaCal +this.gpa_and_grade(re).gpaCal;

        let totalcgpa = totalgpa / 6 ;
        let finalcgpa;
            
        if( bn < 33 || en < 33 || mt < 33 || sc < 33 || ss < 33 || re < 33 ){
           finalcgpa = 'F'
           totalcgpa = 0;
        }else if( totalcgpa >= 1 && totalcgpa < 2 ){
            finalcgpa = 'D';
        }else if( totalcgpa >= 2 && totalcgpa < 3 ){
            finalcgpa = 'C';
        }else if( totalcgpa >= 3 && totalcgpa < 3.5 ){
            finalcgpa = 'B';
        }else if( totalcgpa >= 3.5 && totalcgpa < 4 ){
            finalcgpa = 'A-';
        }else if( totalcgpa >= 4 && totalcgpa < 5 ){
            finalcgpa = 'A';
        }else if( totalcgpa == 5 ){
            finalcgpa = 'A+';
        }

        return {
            totalGrade : totalcgpa == 0 ? '' : totalcgpa.toFixed(2),
            totalCgpa : finalcgpa,
        }

    };
            
    // // CGPA Calculator
    // this.cgpa = function( bn, en, mt, sc, ss, re ){
            
    //     let totalgpa = ( bn + en + mt + sc + ss + re );
    //     let cgpa = totalgpa / 6 ;
            
    //     if( bn == 0 || en == 0 || mt == 0 || sc == 0 || ss == 0 || re == 0 ){
    //         return 'Your are failed, again next year';
    //     }else{
    //         return `Your CGPA = ${ cgpa } & Grade = ${ this.totalGrade( cgpa.toFixed(2))}`;
    //     }
    // }
            
};

