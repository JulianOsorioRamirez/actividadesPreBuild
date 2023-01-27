import { makeStyles, Typography } from '@material-ui/core'
import { format } from 'date-fns'
import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import ViewInfoActionModal from 'components/ReactTableActions/ViewInfo/ViewInfoActionModal'

import styles from '../styles/ObjectiveModalStyle'

const useStyles = makeStyles(styles)

const ViewObjectiveInfo = ({ viewActivityInfo, closeViewActivityInfoModal, info }) => {
  const classes = useStyles()

  const {
    codigo_perfil,
    descripcion_tarea,
    dificultad,
    magnitud_temporal,
    unidades_minimo,
    unidades_medio,
    unidades_maximo,    
    porcentaje_entrada_minimo,
    porcentaje_entrada_medio,
    porcentaje_entrada_maximo,
    tiempo_minimo,
    tiempo_medio,
    tiempo_maximo,
    porcentaje_jornada_minimo,
    porcentaje_jornada_medio,
    porcentaje_jornada_maximo,
    nombre, 
    apellido1, 
    apellido2,
    fecha_ultima_modificacion,
  } = info

  return (
    <ViewInfoActionModal
      open={viewActivityInfo}
      handleCloseModal={closeViewActivityInfoModal}
      modalTitle={`Información de Objetivos`}
      children={
        <GridContainer>
          <GridItem xs={12} md={12}>
            {codigo_perfil && (
              <Typography variant='body1' gutterBottom>
                Perfil: <b>{codigo_perfil}</b>
              </Typography>
            )}
            {nombre && (
              <Typography variant='body1' gutterBottom>
                Puesto: <b>{nombre} {apellido1} {apellido2}</b>
              </Typography>
            )}
            <Typography variant='body1' gutterBottom>
              Descripción: <b>{descripcion_tarea}</b>
            </Typography>
            <Typography variant='body1' gutterBottom>
              Dificultad: <b>{dificultad}</b>
            </Typography>
            <Typography variant='body1' gutterBottom>
              Magnitud temporal: <b>{magnitud_temporal}</b>
            </Typography>
            <Typography variant='body1' gutterBottom>
              Fecha última modificación: <b>{fecha_ultima_modificacion ? format(new Date(fecha_ultima_modificacion), 'dd-MM-yyyy') : ''}</b>
            </Typography>
          </GridItem>
          <GridItem className={classes.resourcesContainer} xs={12} md={12}>
            <GridItem className={classes.resourcesItem} xs={4} md={4}>
              <h4 className={classes.resourcesTitle}>Unidad (ud)</h4>
              <Typography variant='body1' gutterBottom>
                mínima: <b>{unidades_minimo}</b>
              </Typography>
              <Typography variant='body1' gutterBottom>
                media: <b>{unidades_medio}</b>
              </Typography>
              <Typography variant='body1' gutterBottom>
                máxima: <b>{unidades_maximo}</b>
              </Typography>
            </GridItem>
            <GridItem className={classes.resourcesItem} xs={4} md={4}>
              <h4 className={classes.resourcesTitle}>Entrada (%) </h4>
              <Typography variant='body1' gutterBottom>
                mínima: <b>{porcentaje_entrada_minimo}</b>
              </Typography>
              <Typography variant='body1' gutterBottom>
                media: <b>{porcentaje_entrada_medio}</b>
              </Typography>
              <Typography variant='body1' gutterBottom>
                max: <b>{porcentaje_entrada_maximo}</b>
              </Typography>
            </GridItem>
            <GridItem className={classes.resourcesItem} xs={4} md={4}>
              <h4 className={classes.resourcesTitle}>Tiempo (min/ud) </h4>
              <Typography variant='body1' gutterBottom>
                mínima: <b>{tiempo_minimo}</b>
              </Typography>

              <Typography variant='body1' gutterBottom>
                media: <b>{tiempo_medio}</b>
              </Typography>

              <Typography variant='body1' gutterBottom>
                máxima: <b>{tiempo_maximo}</b>
              </Typography>
            </GridItem>
            <GridItem className={classes.resourcesItem} xs={6} md={6}>
              <h4 className={classes.resourcesTitle}>Jornada laboral (%) </h4>
              <Typography variant='body1' gutterBottom>
                mínima: <b>{porcentaje_jornada_minimo}</b>
              </Typography>

              <Typography variant='body1' gutterBottom>
                media: <b>{porcentaje_jornada_medio}</b>
              </Typography>

              <Typography variant='body1' gutterBottom>
                máxima: <b>{porcentaje_jornada_maximo}</b>
              </Typography>
            </GridItem>            
          </GridItem>
        </GridContainer>
      }
    />
  )
}

export default ViewObjectiveInfo
