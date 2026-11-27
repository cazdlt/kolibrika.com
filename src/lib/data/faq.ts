export interface FaqItem {
	question: string;
	answer: string;
}

export const faqs: FaqItem[] = [
	{
		question: '¿Solo hacen estudios de mercado o también desarrollan datos, BI e IA?',
		answer:
			'Hacemos ambas cosas. Podemos entregar desde un estudio puntual de competencia o portafolio hasta la arquitectura completa: pipelines automatizados, data warehouse, tableros de BI, portales web con permisos por rol y soluciones con IA aplicada sobre tus propios datos.'
	},
	{
		question: '¿Trabajan solo con industria farmacéutica y salud veterinaria?',
		answer:
			'Nuestra mayor trayectoria está en farma y salud animal, sectores con alta exigencia regulatoria y canales complejos. Sin embargo, tanto nuestra metodología de inteligencia de mercados como nuestra arquitectura de BI aplican a cualquier empresa B2B.'
	},
	{
		question: '¿Qué incluye la asesoría inicial gratuita?',
		answer:
			'Es una conversación de 30 minutos para revisar tu reto comercial o tus fuentes de datos actuales, validar qué enfoque tiene mayor retorno y definir un posible alcance sin compromiso.'
	},
	{
		question: '¿Con qué fuentes de datos pueden integrarse?',
		answer:
			'Integramos bases de datos corporativas (SQL Server, PostgreSQL), ERPs, archivos de Excel, SharePoint, correo y fuentes externas de mercado en un solo repositorio confiable y actualizado automáticamente.'
	},
	{
		question: '¿Cómo manejan la confidencialidad de la información?',
		answer:
			'Firmamos acuerdos de confidencialidad (NDA) desde la primera reunión si tu equipo lo requiere. Las bases de datos, despliegues e infraestructura pueden operar dedicados y aislados para tu organización.'
	}
];
