

## HU #1 - Registro de un nuevo cliente

Criterios de aceptación:

- [x] En la barra de navegación debe existir un botón que permita acceder al formulario de registro como nuevo cliente.
- [x] En el formulario debe existir una opción que permita registrarse a la página con Google o mostrar abajo el formulario correspondiente para registrarse ingresando los datos correspondientes.
- [x] En el formulario, el cliente tendrá que ingresar su nombre y apellido, dirección (si corresponde), departamento (si corresponde), teléfono, email y su clave, la cual tendrá que confirmar que ha sido escrita correctamente, teniendola que escribir de nuevo en otro campo de confirmación de contraseña. En el caso de que no corresponda agregar la dirección y el departamento, se podrá continuar con el registro sin completar esos datos ya que no serán obligatorios.
- [ ] La contraseña deberá tener un mínimo de 8 (ocho) caracteres, y tendrá que tener por lo menos una letra mayúscula, una letra minúscula y un símbolo.
- [ ] El sistema tendrá que verificar que la dirección de mail haya sido escrita de forma correcta.
- [ ] El sistema tendrá que verificar que las dos contraseñas ingresadas sean exactamente iguales.
- [ ] El sistema tendrá que verificar que no exista en el sistema un cliente registrado con la misma dirección de email.
- [ ] Si todos los pasos anteriores son correctos, se registrará al cliente en la base de datos de la empresa, con la condición de que su contraseña quede encriptada.
- [ ] El sistema asignará al cliente automáticamente el rol de cliente, sin posibilidad de que esto cambie en ningún momento.
- [ ] Si todos los pasos anteriores son correctos, se redirigirá al cliente a la página principal, apareciendo en la barra de navegación su nombre y un menú de opciones desplegable que le mostrará las opciones de ver su perfil, su historial de compras y la posibilidad de desconectarse.
      
## HU #2 - Ingreso al sistema como cliente

- [ ] En la barra de navegación debe existir un botón que nos permita acceder al login de la página, el cual nos redirigirá al formulario de login correspondiente.
- [ ] En el formulario de login debe existir una opción de poder loguearse con Google a la página o mostrar abajo el formulario para poder loguearse con los datos correspondientes.
- [ ] En el formulario se deberá ingresar la dirección de mail con la cual el usuario se registró y su correspondiente contraseña.
- [ ] El sistema deberá verificar mediante la base de datos, que tanto la dirección de mail como la contraseña sean correctas. Si alguno o los dos datos no son correctos, se le informará al cliente y se le permitirá intentarlo de nuevo.
- [ ] Si los datos son correctos, se redirigirá al cliente a la página principal, apareciendo en la barra de navegación su nombre y un menú de opciones desplegable que le mostrará las opciones de ver su perfil, su historial de pedidos y la posibilidad de desconectarse.
- [ ] Si el cliente está dado de baja, se le deberá mostrar la situación y no podrá realizar pedidos.
- [ ] Si el cliente permanece conectado al sistema por más de 45 minutos sin ninguna actividad, se lo desconectará automáticamente, teniendo que hacer un nuevo login para volver a acceder.

## HU #3 - Actualización de datos como cliente

- [ ] Cuando el cliente acceda a la opción de ver su perfil, se le reenviará a una página en donde podrá ver todos sus datos personales.
- [ ] En dicha página deberá existir un botón en donde se le permita modificar sus datos personales, el cual lo redirigirá a un formulario en donde podrá cambiar sus datos.
- [ ] En dicho formulario se le permitirá cambiar su dirección de entrega.
- [ ] En dicho formulario se le permitirá cambiar su contraseña, la cual deberá tener un mínimo de 8 (ocho) caracteres, y deberá tener por lo menos una letra mayúscula, una letra minúscula y un símbolo, y tendrá otro campo en donde tendrá que ingresarla nuevamente.
- [ ] El sistema tendrá que verificar que las dos contraseñas coinciden. En caso contrario, se le deberá mostrar un mensaje por pantalla diciendo que las contraseñas no coinciden.
- [ ] Si los datos modificados son aceptados por el sistema, se tendrán que registrar los nuevos datos en la base de datos del sistema, con la contraseña encriptada si es el caso.

## HU #4 - Registro de un nuevo empleado

- [ ] El administrador podrá acceder a un formulario para poder registrar un nuevo empleado. El administrador tendrá que ingresar el nombre, apellido, dirección, departamento, teléfono, email y una clave provisoria, la cual el empleado, al tener acceso por primera vez, tendrá que modificar obligatoriamente.
- [ ] En el formulario, el administrador tendrá que seleccionar un rol de una lista de roles, para que el empleado al ingresar, sólo pueda acceder a las funcionalidades del sistema que le corresponde.
- [ ] El administrador tendrá que confirmar que la contraseña ha sido escrita correctamente, teniendolá que escribirla de nuevo en otro campo de confirmación de contraseña.
- [ ] La contraseña deberá tener un mínimo de 8 (ocho) caracteres, y deberá tener por lo menos una letra mayúscula, una letra minúscula y un símbolo.
- [ ] El sistema tendrá que verificar que la dirección de mail haya sido escrita de forma correcta.
- [ ] El sistema tendrá que verificar que las dos contraseñas ingresadas sean exactamente iguales.
- [ ] El sistema tendrá que verificar que no exista en el sistema un empleado registrado con la misma dirección de email.
- [ ] Si todos los pasos anteriores son correctos, se registrará al empleado en la base de datos de la empresa, con la condición de que su contraseña quede encriptada.

## HU #5 - Ingreso al sistema como empleado

- [ ] En la barra de navegación debe existir un botón que nos permita acceder al login de la página, el cual nos redirigirá al formulario de login correspondiente.
- [ ] Si es la primera vez que el empleado entra, en el formulario se deberá ingresar la dirección de mail con la cual el administrador lo registró al empleado y la contraseña que nos pasó el administrador.
- [ ] El sistema deberá verificar mediante la base de datos, que tanto la dirección de mail como la contraseña sean correctas. Si alguno o los dos datos no son correctos, se le informará al empleado y se le permitirá intentarlo de nuevo.
- [ ] Si es la primera vez que el empleado entra y el paso anterior fue correcto, se le debe pedir al empleado que ingrese una nueva contraseña, la cual deberá tener un mínimo de ocho caracteres y como mínimo, una letra mayúscula, una letra minúscula y un símbolo.
- [ ] Si no es la primera vez que el empleado entra, el empleado podrá ingresar al sistema ingresando su dirección de mail y contraseña, sin que al empleado se le pida el cambio de contraseña.
- [ ] Si los datos son correctos, se redirigirá al empleado a la página principal, apareciendo en la barra de navegación su nombre y un menú de opciones desplegable que le mostrará las opciones de ver su perfil y la posibilidad de desconectarse.
- [ ] La sesión del empleado se mantendrá abierta durante todo el horario de atención al público del local.
- [ ] Si la sesión del empleado está abierta fuera del horario de atención del local y dicha sesión no ha tenido actividad durante más de 30 minutos, se cerrará la sesión automáticamente.
- [ ] Si el empleado está dado de baja, no se le permitirá el acceso al sistema.
- [ ] Si el empleado se registra/ingresa con Google, ingresará al sistema como cliente.

## HU #6 - Actualización de datos como empleado.

- [ ] Cuando el empleado acceda a la opción de ver su perfil, se le reenviará a una página en donde podrá ver todos sus datos personales.
- [ ] En dicha página deberá existir un botón en donde se le permita modificar sus datos personales, el cual lo redirigirá a un formulario en donde podrá cambiar sus datos.
- [ ] El empleado podrá cambiar su dirección, departamento, teléfono y mail. El sistema tendrá que verificar que la dirección de email tenga el formato correcto.
- [ ] También podrá cambiar su contraseña, la cual deberá tener un mínimo de 8 (ocho) caracteres, y deberá tener por lo menos una letra mayúscula, una letra minúscula y un símbolo, y tendrá otro campo en donde tendrá que ingresarla nuevamente. El sistema tendrá que verificar que las dos contraseñas coinciden. En caso contrario, se le deberá mostrar un mensaje por pantalla diciendo que las contraseñas no coinciden.
- [ ] Si los datos modificados son aceptados por el sistema, se tendrán que registrar los nuevos datos en la base de datos del sistema, con la contraseña encriptada si es el caso.
- [ ] El sistema no permitirá que el empleado modifique su rol, ya que esto sólo lo podrá realizar el administrador.

## HU #7 - Modificación y baja de clientes

- [ ] El administrador podrá acceder a un listado de clientes en donde se podrá ver los datos de los clientes como así también un botón que redirigirá a unformulario para la modificación de datos de un cliente.
- [ ] Al hacer clic en el botón de modificación de un cliente, el administrador podrá cambiar los datos de los clientes, a excepción de su contraseña. También podrá dar de alta/baja a un cliente.

## HU #8 - Modificación y baja de empleados

- [ ] El administrador podrá acceder a un listado de empleados en donde se podrá ver los datos de los empleados como así también un botón que redirigirá a un formulario para la modificación de datos de un empleado.
- [ ] Al hacer clic en el botón de modificación de un empleado, el administrador podrá cambiar los datos de los empleados, a excepción de su contraseña. También podrá dar de alta/baja a un empleado.
- [ ] El administrador es el único usuario que puede cambiar el rol de un empleado, y el formulario deberá tener una opción en donde le permita al administrador ver los roles disponibles y así poder asignarle un nuevo rol en el caso que sea necesario.

## HU #9 - Página principal para clientes

- [ ] A la página se podrá ingresar sin necesidad de un registro o login previo.
- [ ] La página debe tener una barra de navegación en la cual se pueda navegar por los productos separados por categorías.
- [ ] A la derecha de la barra de navegación aparecerán los botones de registro y de login si el usuario no está logueado a la página. Si el usuario está logueado, aparecerá un botón al cual se podrá acceder a un menú de opciones para ver sus datos, su historial de pedidos y desconectarse.
- [ ] A la izquierda de la barra de navegación aparecerá un cuadro de búsqueda para que el usuario busque alguna comida o bebida en especial. Se podrá ingresar el nombre de un producto de forma total o parcial, por ejemplo si busca “burg”, se devolverán los resultados que tengan esa frase en cualquier parte del nombre.
- [ ] La página principal mostrará los productos disponibles con su correspondiente denominación y precio, separados por categorías.
- [ ] Cada producto tendrá un botón o un enlace para poder acceder para ver la información detallada del producto en sí.
- [ ] También deberá haber un botón para poder agregar un producto al carrito tanto desde la página principal como desde el detalle del producto en sí.
- [ ] Si un producto no tiene los insumos necesarios para prepararse, igual aparecerá en la página pero con una leyenda de que ese producto no está disponible por el momento y el botón de agregar al pedido deshabilitado.

## HU #10 - Búsqueda de productos

- [ ] Al ingresar una búsqueda en el cuadro de búsqueda de la página principal, se tendrán que devolver los productos que coincidan con esa búsqueda, de forma total o parcial, como se detalla en uno de los ítems de la historia de usuario anterior.
- [ ] Si la búsqueda no devuelve resultados, se tiene que informar de que no hay productos que coincidan con dicha búsqueda.
- [ ] Si la búsqueda devuelve resultados, se podrán ver los productos de la misma forma que en la página principal, y del mismo modo acceder al detalle de los mismos y poder comprarlos.

## HU #11 - Carrito de compras

- [ ] Cada producto que se agregue desde la página principal, de búsqueda o de detalle de producto se irá agregando al carrito de compras, en donde aparecerá el nombre, el precio unitario y el subtotal de dicho producto (cantidad pedida del producto * precio unitario). Este subtotal se tendrá que actualizar automáticamente al agregar o disminuir cantidades del producto.
- [ ] Si el cliente agrega dos o más productos iguales al pedido, no aparecerán por separado, sino que se mostrarán las unidades correspondientes de cada producto.
- [ ] En cada producto habrá botones o similar para sumar o restar cantidades de dicho producto y también para eliminarlo.
- [ ] Se mostrará el subtotal general del pedido, teniendo que actualizarse automáticamente ante cada cambio en el carrito de compras (por ejemplo al agregar o disminuir la cantidad de un producto o la eliminación de alguno).
- [ ] En cualquier momento el cliente puede regresar a la página principal para seguir comprando productos.
- [ ] Por último, tiene que haber un botón de “confirmar pedido” para ir al proceso de opciones de entrega y pago.

## HU #12 - Confirmación del pedido

- [ ] Al confirmar un pedido, el sistema verificará que el usuario haya ingresado, si no se lo redirigirá a la pantalla de ingreso. Después del ingreso de lo redirigirá a la pantalla del pedido.
- [ ] Acto seguido se le preguntará al cliente si el pedido lo retira en local o si lo quiere a domicilio. Si lo retira en local se le ofrecerá un 10% de descuento. Si se elige la opción de envío a domicilio se le pedirá la dirección y el teléfono (importante, mostrar como datos predeterminados los ingresados al momento del registro, los cuales podrán modificarse si es necesario).
- [ ] A continuación se le pedirá al cliente que elija la forma de pago. Si en el paso anterior se eligió ‘Envío a domicilio’, la única opción será Mercado Pago. Si por el contrario se eligió ‘Retiro en local’, se mostrará como opciones ‘Efectivo’ o ‘Mercado Pago’.
- [ ] Por último se le mostrará al cliente una pantalla con todo el resumen (detalle de ítems pedidos, forma de entrega, forma de pago, detalle monetario con el subtotal, descuento si es que corresponde y total) y un botón de ‘Confirmar pedido’.
- [ ] Cuando el pedido se confirme, el sistema tendrá que descontar del stock de ingredientes los ingredientes y su correspondiente cantidad de cada producto.
- [ ] Asimismo, cuando un pedido se confirme, se le asignará de forma predeterminada el estado “A confirmar” y el cajero podrá verlo en el listado de pedidos (ver HU#14).
- [ ] Si el cliente eligió como opción de pago ‘Mercado Pago’, se mostrará un botón que procederá a realizar el pago mediante dicha plataforma (importante, usar las tarjetas de prueba que ofrece Mercado Pago, no tarjetas reales).
- [ ] Si el pago es exitoso, se guardará en la base de datos el ‘payment_id’ y se volverá a la pantalla del detalle del pedido. También se generará la factura asociada a dicho pedido, la cual será enviada al cliente por mail y también se podrá consultar desde el detalle del pedido.
- [ ] También se mostrará en el detalle del pedido en cuánto tiempo aproximadamente estará listo. La fórmula que se utilizará para dicho cálculo es la siguiente: Del tiempo estimado de cada uno de los artículos pedidos por el cliente se elige el mayor + De los pedidos que se encuentran en cocina, el artículo con el mayor tiempo estimado + 10 minutos de entrega por delivery (solo si el cliente eligió dicha opción).

## HU #13 - Historial de pedidos

- [ ] El cliente tiene que haber ingresado al sistema para poder ver su historial de pedidos.
- [ ] El cliente debe poder ver una grilla en donde aparecerán todos los pedidos realizados al local con su respectiva información (fecha, número de pedido, total), un botón para poder ver el detalle de cada pedido y otro botón para poder visualizar la factura de dicho pedido.
- [ ] En la pantalla de detalle de pedido, deben aparecer todos los datos (fecha, número de pedido, detalle de ítems pedidos, subtotal, descuento y total, además la forma de entrega y la forma de pago).
- [ ] En la pantalla de detalle de pedido también debe aparecer un botón para poder visualizar la factura de dicho pedido.
- [ ] Cuando se elige visualizar una factura, tanto desde la grilla como desde el detalle de un pedido, la misma se podrá imprimir o descargar.

## HU #14 - Vista y recepción de pedidos

- [ ] El cajero podrá acceder a una página en donde habrá una grilla con todos los pedidos, su información y su estado.
- [ ] El cajero podrá filtrar los pedidos por estado mediante un combobox con opciones (A confirmar, En cocina, Listo, En delivery, Entregado).
- [ ] El cajero podrá buscar un pedido por su id mediante un cuadro de búsqueda.
- [ ] Cuando un cliente confirma un pedido, se le asigna de forma predeterminada el estado “A confirmar”.

## HU #15 - Administración de estado, cobro y entrega de pedido

- [ ] El cajero revisará los pedidos “A confirmar”, y si es todo correcto, le asignará el estado “A cocina” si en el pedido hay ítems que requieren preparación o el estado “Listo” si no hay ítems que tengan que pasar por cocina (por ejemplo si es solo de bebidas).
- [ ] Los pedidos con el estado “Listo” pueden pasar al estado “En delivery” si el cliente eligió envío a domicilio o “Entregado” si el cliente eligió retirarlo en local y lo retiró.
- [ ] El cajero no podrá asignar el estado de “Entregado” a un pedido si el cliente no lo ha pagado con la opción de pago elegida.
- [ ] La lógica de cambio de estados deberá ser coherente y con justificación. Por ejemplo: si un pedido tiene el estado ‘A confirmar’, las opciones ‘En delivery’ o ‘Entregado’ deben estar deshabilitadas; o si un pedido está listo pero no ha sido pagado todavía, tiene que estar deshabilitada la opción de ‘Entregado’, ya que primero se tiene que realizar el cobro; etc.

## HU #16 - Entrega de pedidos Delivery

- [ ] El delivery podrá acceder a una página en donde habrá una grilla con todos los pedidos con el estado “En delivery” y su respectiva información.
- [ ] El delivery podrá acceder al detalle de cada pedido, para ver principalmente el nombre y apellido del cliente, el teléfono y la dirección de entrega.
- [ ] El delivery podrá asignarle el estado “Entregado” a un pedido.
- [ ] Cuando a un pedido se le asigne el estado “Entregado”, desaparecerá de la grilla de pedidos a entregar.

## HU #17 - Vista de pedidos

- [ ] El cocinero podrá acceder a una página en donde habrá una grilla con todos los pedidos a preparar.
- [ ] Se podrá acceder al detalle de cada pedido para ver los productos pedidos y la correspondiente receta de cada uno.
- [ ] También se podrá ver el tiempo aproximado de entrega del pedido que el sistema calculó (ver ítem en HU#12). Si el cocinero considera que habrá un retraso en la preparación del pedido, le podrá sumar el tiempo que considere necesario.
- [ ] El cocinero podrá asignarle el estado “Listo” a un pedido cuando se haya terminado de preparar.
- [ ] El cocinero no tendrá acceso a funcionalidades del sistema que están fuera de su ámbito (por ejemplo marcar un pedido como pagado, asignarle el estado de “Entregado”, etc.)
- [ ] Cuando a un pedido se le asigne el estado “Listo”, desaparecerá de la grilla de pedidos a preparar.

## HU #18 - Generación de factura

- [ ] Cuando un pedido se marque como pagado (al pagar con Mercado Pago o en el local con efectivo), el sistema emitirá automáticamente la factura correspondiente.
- [ ] La factura emitida se enviará automáticamente al cliente por mail.

## HU #19 - Anulación de Factura Mediante Nota de crédito

- [ ]  En el caso que se tenga que anular una factura, se emitirá una nota de crédito a nombre del cliente con los mismos ítems y los mismos importes que la factura original.
- [ ]  Al momento de emisión de la nota de crédito, se tendrán que agregar al stock los ingredientes que fueron descontados cuando se confirmó el pedido.

## HU #20 - Alta, modificación y baja de rubros de ingredientes

- [ ] El cocinero / administrador podrá acceder a una página en donde habrá una grilla con todos los rubros relacionados a ingredientes, en donde se podrá ver el nombre del rubro, si está dado de alta / baja y un botón para modificar dicho rubro.
- [ ] En la página habrá un botón para poder crear un nuevo rubro.
- [ ] Al agregar un nuevo rubro, se debe redirigir a un formulario para ingresar los datos del nuevo rubro (nombre y si está dado de alta / baja), y al confirmar la operación mediante el botón correspondiente, debe redireccionar de nuevo a la grilla de rubros.
- [ ] En el formulario anterior debe existir un botón para cancelar el ingreso de un nuevo rubro, el cual nos redireccionará de nuevo a la grilla de rubros.
- [ ] El formulario de edición de un rubro debe tener las mismas opciones que el de agregar un nuevo rubro.

## HU #21 – Alta, modificación y baja de rubros de productos

- [ ] El cocinero / administrador podrá acceder a una página en donde habrá una grilla con todos los rubros relacionados a productos, en donde se podrá ver el nombre del rubro, si está dado de alta / baja y un botón para modificar dicho rubro.
- [ ] En la página habrá un botón para poder crear un nuevo rubro.
- [ ] Al agregar un nuevo rubro, se debe redirigir a un formulario para ingresar los datos del nuevo rubro (nombre y si está dado de alta / baja), y al confirmar la operación mediante el botón correspondiente, debe redireccionar de nuevo a la grilla de rubros.
- [ ] En el formulario anterior debe existir un botón para cancelar el ingreso de un nuevo rubro, el cual nos redireccionará de nuevo a la grilla de rubros.
- [ ] El formulario de edición de un rubro debe tener las mismas opciones que el de agregar un nuevo rubro.

## HU #22 – Alta, modificación y baja de ingredientes

- [ ] El cocinero / administrador podrá acceder a una página en donde habrá una grilla con todos los ingredientes, en donde se podrá ver el nombre del ingrediente, su rubro, su precio de costo, su stock mínimo y actual, su unidad de medida, si está dado de alta / baja y un botón para modificar dicho ingrediente.
- [ ] En la página habrá un botón para poder crear un nuevo ingrediente.
- [ ] Al agregar un nuevo ingrediente, se debe redirigir a un formulario para ingresar los datos del nuevo ingrediente (nombre, rubro, stock mínimo, stock actual, unidad demedida y si está dado de alta / baja), y al confirmar la operación mediante el botón correspondiente, debe redireccionar de nuevo a la grilla de ingredientes.
- [ ] Para elegir el rubro al cual pertenece el ingrediente, se mostrarán mediante un combobox los rubros de ingredientes y se podrá seleccionar un rubro que esté dado de alta (si un rubro está dado de baja, se podrá mostrar pero no seleccionar).
- [ ] En el formulario anterior debe existir un botón para cancelar el ingreso de un nuevo ingrediente, el cual nos redireccionará de nuevo a la grilla de ingredientes.
- [ ] El formulario de edición de un ingrediente debe tener las mismas opciones que el de agregar un nuevo ingrediente.

## HU #23 – Alta, modificación y baja de productos

- [ ] El cocinero / administrador podrá acceder a una página en donde habrá una grilla con todos los productos, en donde se podrá ver el nombre del producto, su rubro, su tiempo de cocina, su precio de venta, si está dado de alta / baja y un botón para modificar dicho producto.
- [ ] En la grilla podrán aparecer otros datos de cada producto si se considera necesario o inclusive no mostrar alguno de los detallados en el ítem anterior.
- [ ] En la página habrá un botón para poder crear un nuevo producto.
- [ ] Al agregar un nuevo producto, se debe redirigir a un formulario para ingresar los datos del nuevo producto (nombre, descripción, receta, tiempo de cocina, rubro, imagen, precio de venta, sus ingredientes y si está dado de alta / baja), y al confirmar la operación mediante el botón correspondiente, debe redireccionar de nuevo a la grilla de productos.
- [ ] Para elegir el rubro al cual pertenece el producto, se mostrarán mediante un combobox los rubros de productos y se podrá seleccionar un rubro que esté dado de alta (si un rubro está dado de baja, se podrá mostrar pero no seleccionar).
- [ ] Para agregar un ingrediente al producto, se mostrarán los ingredientes mediante un combobox, y se podrá elegir un ingrediente que esté dado de alta (si un ingrediente está dado de baja, se podrá mostrar pero no seleccionar).
- [ ] Al seleccionar un ingrediente, se mostrará su unidad de medida como referencia y se podrá ingresar la cantidad de dicho ingrediente.
- [ ] Al ir ingresando ingredientes, se tendrá que mostrar el costo total del producto (suma de cantidad * precio de costo de cada ingrediente), el cual se actualizará automáticamente con cada cambio de ingredientes que haya. Este servirá como referencia a la hora de poner el precio de venta.
- [ ] Si no se agrega como mínimo un ingrediente, no se podrá dar de alta el producto (el botón tendrá que estar deshabilitado o se tendrá que informar de la situación al cocinero / administrador).
- [ ] En el formulario anterior debe existir un botón para cancelar el ingreso de un nuevo producto, el cual nos redireccionará de nuevo a la grilla de ingredientes.
- [ ] El formulario de edición de un producto debe tener las mismas opciones que el de agregar un nuevo producto.

## HU #24 – Registro de compra de ingrediente

- [ ] El cocinero / administrador podrá acceder a un formulario que permita registrar las compras de ingredientes.
- [ ] En dicho formulario se podrá seleccionar el ingrediente mediante un combobox en donde aparecerán todos los ingredientes dados de alta.
- [ ] En el formulario tendrá que aparecer un botón que permita dar de alta un ingrediente, en el caso de que no esté dado de alta el ingrediente del cual queremos registrar la compra (el formulario será el de la HU#22).
- [ ] Al seleccionar un ingrediente, se podrá ingresar el precio de costo (el cual actualizará el precio de costo en la base de datos si es que este ha cambiado) y la cantidad comprada (la cual se sumará al stock actual de dicho ingrediente). También tendrá que aparecer como referencia la unidad de medida del ingrediente seleccionado.

## HU #25 – Control de stock de ingredientes

- [ ] El cocinero / administrador podrá acceder a una página en donde se muestran los ingredientes que estén bajos de stock (cuando el stock actual está por debajo del mínimo).
- [ ] También se mostrarán los que estén cerca del stock mínimo (cuando el stock actual está a un 20% -u otro porcentaje elegido- o menos del stock mínimo).
- [ ] De cada ingrediente se mostrará principalmente el nombre, la unidad de medida, el stock mínimo, el stock actual y la diferencia entre estos dos últimos atributos.
- [ ] También se mostrará en cada ingrediente un botón para registrar una compra del mismo (se redireccionará al formulario de la HU#24).

## HU #26 – Ranking de productos

- [ ] El administrador podrá acceder a una página en donde se muestran los productos más vendidos, con su nombre y cantidad vendida, ordenados por cantidad, de mayor a menor.
- [ ] Los productos deben estar diferenciados entre productos de cocina y bebidas, por ejemplo dos grillas separadas.
- [ ] Se podrán elegir dos fechas para ver los productos más vendidos entre dichas fechas.
- [ ] La información podrá ser exportada a un archivo Excel, el cual podrá ser guardado en donde el administrador necesite.

## HU #27 – Ranking de clientes

- [ ] El administrador podrá acceder a una página en donde se muestran los clientes, la cantidad de pedidos de cada uno y el importe total de todos los pedidos, ordenados por cantidad de pedidos o importe total de mayor a menor (esto se podrá seleccionar según sea el caso).
- [ ] Se podrán elegir dos fechas para ver la cantidad de pedidos e importe total por cliente entre dichas fechas.
- [ ] En cada cliente debe haber un botón que diga “ver pedidos” para poder acceder al detalle de pedidos hechos por el cliente.
- [ ] La información podrá ser exportada a un archivo Excel, el cual podrá ser guardado en donde el administrador necesite.

## HU #28 – Movimientos monetarios

- [ ] El administrador podrá acceder a una página en donde se muestran el total de ingresos (suma de los importes de todos los pedidos), costos (suma del costo de todos los pedidos) y ganancias del local (ingresos - costos).
- [ ] Se podrán elegir dos fechas para ver los totales entre dichas fechas.
- [ ] La información podrá ser exportada a un archivo Excel, el cual podrá ser guardado en donde el administrador necesite.
