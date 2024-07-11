// Asumiendo que `productos-tasa.json` está en el mismo directorio que tu script
const url = './productos-tasa.json';

fetch(url)
  .then(response => response.json()) // Convierte la respuesta en JSON
  .then(data => {
    // `data` es ahora el objeto JSON obtenido del archivo
    data.forEach(item => {
      const vehiculo = item.Vehiculo;
      console.log(`CodProducto: ${vehiculo.CodProducto}`);
      console.log(`DenominacionComercial: ${vehiculo.DenominacionComercial}`);
      console.log(`IdProducto: ${vehiculo.IdProducto}`);
      console.log(`Katashiki: ${vehiculo.Katashiki}`);
      console.log(`Marca: ${vehiculo.Marca}`);
      console.log(`Modelo: ${vehiculo.Modelo}`);
      console.log(`ProductionSuffix: ${vehiculo.ProductionSuffix}`);
      console.log(`SalesSuffix: ${vehiculo.SalesSuffix}`);
      console.log(`SalesSuffixDescription: ${vehiculo.SalesSuffixDescription}`);
      console.log(`Version: ${vehiculo.Version}`);
      if (vehiculo.Colores) {
        vehiculo.Colores.forEach(color => {
          console.log(`  Color: ${color.Descripcion}`);
        });
      }
      console.log('-----------------------------------');
    });
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));