import React from 'react'

export default function MeuProduto(params) {
  return (
    <div>
        <h1>Recuperamdo o parâmetro [slug]</h1>
        <div>
            <p>O valor é : {params.slug}</p>
        </div>
    </div>
  )
}
