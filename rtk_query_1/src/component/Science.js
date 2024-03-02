import React,{ useRef } from 'react'
import { useGetScienceQuery , useAddScienceMutation ,
         useDeleteScienceMutation, useUpdateScienceMutation} from '../api/scienceAdmin'

function Science() {
    const {data, error, isLoading} = useGetScienceQuery();
    const [addScience] = useAddScienceMutation();
    const [deleteScience] = useDeleteScienceMutation();
    const [updateScience] = useUpdateScienceMutation();

    const phy = useRef();
    const chem = useRef();
    const math = useRef();

    const store_marks = (content, scienceId) => {
        if(content === "add"){
            addScience({
                physics : Number(phy.current.value),
                chemistry : Number(chem.current.value),
                mathematics : Number(math.current.value),
            })
        }
        else{
            updateScience({
                id : scienceId,
                physics : Number(phy.current.value),
                chemistry : Number(chem.current.value),
                mathematics : Number(math.current.value),
            })
        }
    }
  return (
    <div>
         {
            data && data.map((sc) => (
                <p key={sc.id}> 
                  <p>student {sc.id}</p> 
                  <p>
                     physics = {sc.physics}, chemistry = {sc.chemistry}, mathematics = {sc.mathematics} ,
                     total marks = {sc.physics + sc.chemistry + sc.mathematics}
                  </p>
                  <button onClick={() => deleteScience(sc.id)}>delete science</button>
                  <button onClick={() => store_marks("update", sc.id)}>
                     update Science
                  </button>
                </p>
            ))
         }

         <form >
            <p>physics : </p><input type="text" ref={phy} />
            <p>chemistry : </p><input type="text" ref={chem} />
            <p>mathematics : </p><input type="text" ref={math} />
            <button type="submit" onClick={() => store_marks("add")}>add science marks</button>
         </form>
    </div>
  )
}

export default Science
