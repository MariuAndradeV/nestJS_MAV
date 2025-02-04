import { Injectable } from '@nestjs/common';

@Injectable()
export class PeriodoLaboralesService {
    private periodoLaborales = {
        'Periodo de Vacaciones Completo': {
            2019: {
                pedro: { 
                  'Dias Laborales': "227", 
                  'Dias No Laborales': "18", 
                  'Total': "23" 
                },
                mariu: { 
                  'Dias Laborales': "262", 
                  'Dias No Laborales': "1", 
                  'Total': "23" 
                },
                manuel: { 
                  'Dias Laborales': "252", 
                  'Dias No Laborales': "1", 
                  'Total': "23" 
                },
            },
            2020: {
                pedro: { 
                  'Dias Laborales': "212", 
                  'Dias No Laborales': "1", 
                  'Total': "233" 
                },  
                mariu: { 
                  'Dias Laborales': "55", 
                  'Dias No Laborales': "1", 
                  'Total': "23" 
                },
                manuel: { 
                  'Dias Laborales': "45", 
                  'Dias No Laborales': "3", 
                  'Total': "4" 
                },        
            },
            'Total Perdido': {
              'pedro': 45,
              'mariu': 10,
              'manuel': 20 ,   

            }
        },
        'Periodo de Vacaciones Pendiente': {
          2019: {
            pedro: { 
              'Dias Laborales': "22", 
              'Dias No Laborales': "1", 
              'Total': "23" 
            },
            mariu: { 
              'Dias Laborales': "22", 
              'Dias No Laborales': "1", 
              'Total': "23" 
            },
            manuel: { 
              'Dias Laborales': "22", 
              'Dias No Laborales': "71", 
              'Total': "243" 
            }, 
          },
        2020: {
            pedro: { 
              'Dias Laborales': "292", 
              'Dias No Laborales': "19", 
              'Total': "293" 
            },      
            mariu: { 
              'Dias Laborales': "282", 
              'Dias No Laborales': "71", 
              'Total': "283" 
            },
            manuel: { 
              'Dias Laborales': "282", 
              'Dias No Laborales': "71", 
              'Total': "523" 
            },    
          },
        },
        'Periodo de Vacaciones 3 XYZ': {
          2019: {
            pedro: { 
              'Dias Laborales': "22", 
              'Dias No Laborales': "1", 
              'Total': "23" 
            },
            mariu: { 
              'Dias Laborales': "272", 
              'Dias No Laborales': "19", 
              'Total': "283" 
            },
            manuel: { 
              'Dias Laborales': "292", 
              'Dias No Laborales': "17", 
              'Total': "283" 
            },
          },
          2020: {
              pedro: { 
                'Dias Laborales': "22", 
                'Dias No Laborales': "1", 
                'Total': "23" 
              },    
              mariu: { 
                'Dias Laborales': "242", 
                'Dias No Laborales': "15", 
                'Total': "263" 
              },   
              manuel: { 
                'Dias Laborales': "212", 
                'Dias No Laborales': "11", 
                'Total': "14" 
              },  
            }, 
          }, 
      };

      
      
    findAll() {
        return this.periodoLaborales
    }

}
